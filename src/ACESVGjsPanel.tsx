import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import { ACESVGOptions, SVGIDMapping } from 'types';
import { Dom as SVGDom, Element as SVGElement, extend as SVGExtend, Runner as SVGRunner, SVG } from '@svgdotjs/svg.js';

interface MappedElements {
  [key: string]: SVGElement | SVGDom;
}

interface Props extends PanelProps<ACESVGOptions> { }

interface PanelState {
  readonly addAllIDs: boolean;
  readonly svgNode: SVGElement | SVGDom | null;
  readonly svgSource: string | null;
  readonly mappedElements: MappedElements | null;
  readonly svgMappings: SVGIDMapping[];
  readonly initFunctionSource: string;
  readonly initFunction: Function | null;
  readonly eventFunctionSource: string;
  readonly eventFunction: Function | null;
  readonly initialized: boolean;
  readonly context: any;
}

interface TextMappedElement extends SVGElement {
  readonly textElement: Element;
}

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

export class ACESVGPanel extends PureComponent<Props, PanelState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      addAllIDs: false,
      svgNode: null,
      svgSource: null,
      svgMappings: [],
      mappedElements: null,
      initFunctionSource: '',
      initFunction: null,
      eventFunctionSource: '',
      eventFunction: null,
      initialized: false,
      context: {},
    };
  }

  private initializeMappings(svgNode: SVGElement | SVGDom): void {
    const svgMappings = this.props.options.svgMappings,
      currentElements: MappedElements = {};
    for (let i = 0; i < svgMappings.length; i++) {
      if (svgMappings[i].mappedName !== '') {
        currentElements[this.props.options.svgMappings[i].mappedName] = svgNode.findOne(
          `#${this.props.options.svgMappings[i].svgId}`
        )!;
      }
    }
    this.setState({ mappedElements: currentElements });
  }

  private mapAllIDs(svgNode: SVGDom): void {
    const svgMappings: SVGIDMapping[] = [...this.props.options.svgMappings];
    const nodeFilterID: NodeFilter = {
      acceptNode(node: Element) {
        if (node.id) {
          if (node.id !== '') {
            return NodeFilter.FILTER_ACCEPT;
          }
        }
        return NodeFilter.FILTER_REJECT;
      },
    };
    const svgWalker = document.createTreeWalker(svgNode.node, NodeFilter.SHOW_ALL, nodeFilterID);
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
    this.props.onOptionsChange(this.props.options);
    this.forceUpdate();
  }

  private mappingClickHandler(event: React.MouseEvent<HTMLElement, MouseEvent>): void {
    if (event.target) {
      let clicked = event.target as Element;
      let loopCount = 0;
      const svgMappings: SVGIDMapping[] = [...this.props.options.svgMappings];
      if (clicked.id) {
        while (clicked.id === '') {
          loopCount++;
          if (loopCount > 20) {
            return;
          }
          clicked = clicked.parentNode as Element;
        }
        for (let i = 0; i < svgMappings.length; i++) {
          if (svgMappings[i].svgId === clicked.id) {
            return;
          }
        }
        svgMappings.push({ svgId: clicked.id, mappedName: '' });
        this.setState({ svgMappings: [...svgMappings], initialized: false });
        this.props.options.svgMappings = [...svgMappings];
        this.props.onOptionsChange(this.props.options);
        this.forceUpdate();
      }
    }
  }

  private renderSVG(element: SVGSVGElement | SVGDom | null): string | null {
    if (element) {
      if (
        this.props.options.initSource !== this.state.initFunctionSource ||
        this.state.addAllIDs !== this.props.options.addAllIDs
      ) {
        this.setState({
          initFunctionSource: this.props.options.initSource,
          addAllIDs: this.props.options.addAllIDs,
          initialized: false,
        });
      }
      if (!this.state.initialized) {
        console.log('initializing');
        const svgNode = SVG(element);
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
            initFunction(this.props.data, this.props.options, this.state.svgNode, this.state.mappedElements);
            this.setState({ initialized: true });
          }
        } catch (e) {
          this.setState({ initialized: true });
          console.error('User init code failed:', e);
        }
      }

      try {
        let eventFunction = this.state.eventFunction;
        if (this.props.options.eventSource !== this.state.eventFunctionSource) {
          const eventFunctionSource = this.props.options.eventSource;
          eventFunction = Function(
            'data',
            'options',
            'svgnode',
            'svgmap',
            'context',
            this.props.replaceVariables(eventFunctionSource)
          );
          this.setState({ eventFunctionSource: eventFunctionSource, eventFunction: eventFunction, initialized: false });
        }
        if (this.state.mappedElements && eventFunction) {
          eventFunction(
            this.props.data,
            this.props.options,
            this.state.svgNode,
            this.state.mappedElements,
            this.context
          );
        }
      } catch (e) {
        console.error('User event code failed:', e);
      }

      return this.state.svgNode ? this.state.svgNode.svg() : null;
    } else {
      return null;
    }
  }

  public render(): React.JSX.Element {
    return (
      <div
        onClick={this.props.options.captureMappings ? this.mappingClickHandler.bind(this) : undefined}
      >
        <svg
          style={{
            width: `${this.props.width}px`,
            height: `${this.props.height}px`,
          }}
          className={'svg-object'}
          ref={(ref) => this.renderSVG(ref)}
        ></svg>
      </div>
    );
  }
}
