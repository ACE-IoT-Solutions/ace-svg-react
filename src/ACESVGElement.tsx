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
  svgRef: SVGSVGElement | null;
  constructor(props: any) {
    super(props);
    this.state = {
      svgNode: null,
      svgMappings: [],
      mappedElements: {},
      initialized: false,
      initFunction: null,
      eventFunction: null,
    };
    this.svgRef = null;
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
    if (element) {
      return this.state.svgNode ? this.state.svgNode.svg() : null;
    }
    return null;
  }

  updateInitFunction() {
    if (this.svgRef && !this.state.initialized) {
      console.log('update initFunction');
      let svgNode = SVG(this.svgRef);
      svgNode.clear();
      svgNode.svg(this.props.options.svgSource);
      svgNode.size(this.props.width, this.props.height);
      if (this.props.options.addAllIDs) {
        this.mapAllIDs(svgNode);
      }
      this.initializeMappings(svgNode);
      this.setState({ svgNode: svgNode });

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
        if (this.state.mappedElements && initFunction) {
          console.log('call initFunction');
          initFunction(this.props.data, this.props.options, this.state.svgNode, this.state.mappedElements);
          this.setState({ initialized: true });
        }
      } catch (e) {
        this.setState({ initialized: true });
        console.log(`User init code failed: ${e}`);
      }
    }
  }

  updateEventFunction() {
    try {
      let eventFunction = this.state.eventFunction;
      console.log('update eventFunction');
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
        console.log('call eventFunction');
        eventFunction(this.props.data, this.props.options, this.state.svgNode, this.state.mappedElements, this.context);
      }
    } catch (e) {
      console.log(`User event code failed: ${e}`);
    }
  }

  componentDidMount(): void {
    console.log('componentDidMount');
    this.updateInitFunction();
    this.updateEventFunction();
  }

  componentDidUpdate(prevProps: Readonly<ACESVGElementProps>): void {
    console.log('componentDidUpdate');
    if (prevProps.options.addAllIDs !== this.props.options.addAllIDs) {
      console.log('update addAllIDs to ', this.props.options.addAllIDs);
    }

    if (prevProps.options.initSource !== this.props.options.initSource) {
      console.log('update options.initSource');
      this.updateInitFunction();
    }

    if (prevProps.options.eventSource !== this.props.options.eventSource) {
      console.log('update options.eventSource');
      this.updateEventFunction();
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
          if (!this.svgRef) {
            this.svgRef = ref;
          }
        }}
      >
        {this.renderSVG(this.svgRef)}
      </svg>
    );
  }
}
