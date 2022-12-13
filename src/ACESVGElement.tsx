import React, { PureComponent } from 'react';
import { SVGIDMapping, ACESVGElementProps, ACESVGElementState, TextMappedElement, MappedElements } from './types';
import { Dom as SVGDom, Element as SVGElement, extend as SVGExtend, Runner as SVGRunner, SVG } from '@svgdotjs/svg.js';

SVGExtend(SVGElement, {
  openOnClick: function (this: SVGElement, url: string) {
    return window.open(url);
  },
  animateContRotate: function (this: SVGElement, speed: number) {
    return (
      this.animate(speed)
        //@ts-ignore
        .ease('-')
        //@ts-ignore
        .rotate(360)
        .loop()
    );
  },
  showOn: function (this: SVGElement, on: boolean) {
    if (on) {
      this.show();
    } else {
      this.hide();
    }
  },
  animateOn: function (this: SVGElement, speed: number, on: boolean, animation: Function) {
    if (on) {
      //@ts-ignore
      if (this.timeline()._runners.length === 0) {
        animation(this.animate(speed));
      } else {
        this.timeline().play();
      }
    } else {
      this.timeline().stop();
    }
  },
  stopAnimation: function (this: SVGRunner) {
    this.timeline().stop();
  },
  getParentNode: function (this: SVGElement) {
    return this.node.parentNode;
  },
  getTopNode: function (this: SVGElement) {
    let currentNode: Element = this.node as Element;
    while (true) {
      if (currentNode.parentNode && !currentNode.className.includes('svg-object')) {
        currentNode = currentNode.parentNode as Element;
      } else {
        return currentNode;
      }
    }
  },
});
SVGExtend(SVGDom, {
  updateXHTMLFontText: function (this: SVGDom, newText: string) {
    let currentElement: Element | TextMappedElement = this.node;
    let i = 0;
    while (currentElement.localName !== 'xhtml:font') {
      if (currentElement.firstElementChild && i < 10) {
        currentElement = currentElement.firstElementChild;
        i++;
      } else {
        return;
      }
    }
    currentElement.innerHTML = newText;
  },
});

export class ACESVGElement extends PureComponent<ACESVGElementProps, ACESVGElementState> {
  constructor(props: any) {
    super(props);
    this.state = {
      svgNode: null,
      svgMappings: [],
      mappedElements: {},
      initialized: false,
      initFunction: null,
      eventFunction: null,
      svgRef: null,
    };
  }

  initializeMappings(svgNode: SVGElement | SVGDom) {
    const svgMappings = this.props.svgMappings;
    let currentElements: MappedElements = { ...this.state.mappedElements };
    currentElements = {};
    for (let i = 0; i < svgMappings.length; i++) {
      if (svgMappings[i].mappedName !== '') {
        currentElements[this.props.svgMappings[i].mappedName] = svgNode.findOne(`#${this.props.svgMappings[i].svgId}`);
      }
    }
    this.setState({ mappedElements: currentElements });
    return currentElements;
  }

  mapAllIDs(svgNode: SVGDom) {
    let svgMappings: SVGIDMapping[] = [...this.props.svgMappings];
    let nodeFilterID: NodeFilter = {
      acceptNode: (node: Element) => {
        if (node.id) {
          if (node.id !== '') {
            return NodeFilter.FILTER_ACCEPT;
          }
        }
        return NodeFilter.FILTER_REJECT;
      },
    };
    let svgWalker = document.createTreeWalker(svgNode.node, NodeFilter.SHOW_ALL, nodeFilterID);
    let currentNode: Element | null = svgWalker.currentNode as Element;
    while (currentNode) {
      if (currentNode && currentNode.id) {
        if (svgMappings.filter((mapping) => (currentNode ? mapping.svgId === currentNode.id : false)).length === 0) {
          svgMappings.push({ svgId: currentNode.id, mappedName: '' });
        }
      }
      currentNode = svgWalker.nextNode() as Element;
    }
    this.setState({ svgMappings: [...svgMappings], initialized: false });
    this.props.options.svgMappings = [...svgMappings];
    // this.props.onOptionsChange(this.props.options)
    this.forceUpdate();
  }

  renderSVG(element: SVGSVGElement | SVGDom | null) {
    console.log(element);
    this.initializeInitFunction();
    if (element) {
      return this.state.svgNode ? this.state.svgNode.svg() : null;
    }
    return null;
  }

  initializeInitFunction() {
    if (this.state.svgRef && !this.state.initialized) {
      console.log('initializing svgNode');
      let svgNode = SVG(this.state.svgRef);
      svgNode.clear();
      svgNode.svg(this.props.options.svgSource);
      svgNode.size(this.props.width, this.props.height);
      if (this.props.options.addAllIDs) {
        this.mapAllIDs(svgNode);
      }
      this.setState({ svgNode: svgNode });
      const currentElements = this.initializeMappings(svgNode);

      console.log('initializing initFunction');
      try {
        const initFunction = Function(
          'data',
          'options',
          'svgnode',
          'svgmap',
          'context',
          this.props.replaceVariables(this.props.options.initSource)
        );
        this.setState({ initFunction });
        if (currentElements && initFunction) {
          initFunction(this.props.data, this.props.options, this.state.svgNode, currentElements);
          this.setState({ initialized: true, mappedElements: currentElements });
        }
      } catch (e) {
        this.setState({ initialized: true });
        console.log(`User init code failed: ${e}`);
      }
    }
  }

  initializeEventFunction() {
    try {
      let eventFunction = this.state.eventFunction;
      if (!eventFunction) {
        let eventFunctionSource = this.props.options.eventSource;
        eventFunction = Function(
          'data',
          'options',
          'svgnode',
          'svgmap',
          'context',
          this.props.replaceVariables(eventFunctionSource)
        );
        this.setState({ eventFunction: eventFunction, initialized: false });
      }

      if (this.state.mappedElements && eventFunction) {
        eventFunction(this.props.data, this.props.options, this.state.svgNode, this.state.mappedElements, this.context);
      }
    } catch (e) {
      console.log(`User event code failed: ${e}`);
    }
  }

  componentDidMount(): void {
    console.log('componentDidMount');
    console.log(this.state.svgRef);
    this.initializeInitFunction();
    this.initializeEventFunction();
  }

  componentDidUpdate(
    prevProps: Readonly<ACESVGElementProps>,
    prevState: Readonly<ACESVGElementState>,
    snapshot?: any
  ): void {
    console.log('componentDidUpdate');
    if (prevProps.options.addAllIDs !== this.props.options.addAllIDs) {
      prevProps.options.addAllIDs = this.props.options.addAllIDs;
      // console.log('element update', this.props.options.addAllIDs);
    }

    if (prevProps.options.initSource !== this.props.options.initSource) {
      this.initializeInitFunction();
    }

    if (prevProps.options.eventSource !== this.props.options.eventSource) {
      this.initializeEventFunction();
    }
  }

  render() {
    return (
      <svg
        style={{
          width: `${this.props.width}px`,
          height: `${this.props.height}px`,
        }}
        className={'svg-object'}
        ref={(ref) => {
          if (!this.state.svgRef) {
            console.log('initialize svgRef');
            this.setState({ svgRef: ref });
          }
        }}
      >
        {this.renderSVG(this.state.svgRef)}
      </svg>
    );
  }
}
