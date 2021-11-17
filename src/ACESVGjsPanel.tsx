import React, { PureComponent, RefObject, createRef } from 'react';
import { PanelProps } from '@grafana/data';
import { ACESVGOptions, SVGIDMapping } from 'types';
import { Dom as SVGDom, Element as SVGElement, extend as SVGExtend, Runner as SVGRunner, SVG } from '@svgdotjs/svg.js';
import { css } from 'emotion';
import { Map, View } from "ol";
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';
import Layer from 'ol/layer/Layer';
import { composeCssTransform } from 'ol/transform';

// import { css } from '@emotion/react'
const coords = [
  [-9484765.091794, 4168569.774560],
  [-9483823.960884, 4168001.274163]
];

interface MappedElements {
  [key: string]: SVGElement | SVGDom;
}

interface Props extends PanelProps<ACESVGOptions> { }

interface PanelState {
  addAllIDs: boolean;
  geomap: Map;
  svgNode: SVGElement | SVGDom | null;
  svgSource: string | null;
  mappedElements: MappedElements | null;
  svgMappings: SVGIDMapping[];
  initFunctionSource: string;
  initFunction: Function | null;
  eventFunctionSource: string;
  eventFunction: Function | null;
  initialized: boolean;
  context: any;
}

interface TextMappedElement extends SVGElement {
  textElement: Element;
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

// export class SimplePanel extends PureComponent<Props, State> = ({ options, data, width, height }) => {
export class ACESVGPanel extends PureComponent<Props, PanelState> {
  mapRef: RefObject<HTMLDivElement>;
  svgElement: SVGSVGElement | null;
  svgContainerRefs: RefObject<HTMLDivElement>[] = [];
  constructor(props: any) {
    super(props);
    this.state = {
      addAllIDs: false,
      geomap: new Map({
        controls: [],
        layers: [
          new TileLayer({
            source: new OSM({
              url: 'https://{a-c}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
          })
        ],
        view: new View({
          center: [0, 0],
          showFullExtent: true,
          zoom: 1,
        }),
      }),
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
    this.mapRef = createRef();
    coords.forEach((coord, key) => {
      this.svgContainerRefs[key] = createRef();
    })
    this.svgElement = null;
  }

  componentDidMount(): void {
    if (this.svgElement !== null) {
      const width = Number(this.svgElement.style.width.replace("px", ""));
      const height = Number(this.svgElement.style.height.replace("px", ""));
      const svgResolution = 360 / width;
      this.svgContainerRefs.forEach((svgContainerRef, key) => {
        if (svgContainerRef.current !== null) {
          svgContainerRef.current.style.transformOrigin = 'top left';
          this.state.geomap.addLayer(new Layer({
            render: (frameState) => {
              if (svgContainerRef.current !== null) {
                const scale = svgResolution / frameState.viewState.resolution;
                const center = [frameState.viewState.center[0] - coords[key][0], frameState.viewState.center[1] - coords[key][1]];
                const size = frameState.size;
                const cssTransform = composeCssTransform(
                  size[0] / 2,
                  size[1] / 2,
                  scale,
                  scale,
                  frameState.viewState.rotation,
                  -center[0] / svgResolution - width / 2,
                  center[1] / svgResolution - height / 2
                );
                svgContainerRef.current.style.transform = cssTransform;
                return svgContainerRef.current;
              }
              return document.createElement("div");
            }
          }));
        }
      });
    }
  }

  componentDidUpdate(): void {
    if (typeof this.state.geomap.getTarget() === "undefined" && this.mapRef.current !== null) {
      this.state.geomap.setTarget(this.mapRef.current);
    }
  }

  initializeMappings(svgNode: SVGElement | SVGDom) {
    const svgMappings = this.props.options.svgMappings;
    let currentElements: MappedElements = { ...this.state.mappedElements };
    currentElements = {};
    for (let i = 0; i < svgMappings.length; i++) {
      if (svgMappings[i].mappedName !== '') {
        currentElements[this.props.options.svgMappings[i].mappedName] = svgNode.findOne(
          `#${this.props.options.svgMappings[i].svgId}`
        );
      }
    }
    this.setState({ mappedElements: currentElements });
  }

  mapAllIDs(svgNode: SVGDom) {
    let svgMappings: SVGIDMapping[] = [...this.props.options.svgMappings];
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
    this.props.onOptionsChange(this.props.options);
    this.forceUpdate();
  }

  mappingClickHandler(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (event.target) {
      let clicked = event.target as Element;
      let loopCount = 0;
      let svgMappings: SVGIDMapping[] = [...this.props.options.svgMappings];
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

  renderSVG(element: SVGSVGElement | SVGDom | null) {
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
        let svgNode = SVG(element);
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
          console.log(`User init code failed: ${e}`);
        }
      }

      try {
        let eventFunction = this.state.eventFunction;
        if (this.props.options.eventSource !== this.state.eventFunctionSource) {
          let eventFunctionSource = this.props.options.eventSource;
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
        console.log(`User event code failed: ${e}`);
      }

      return this.state.svgNode ? this.state.svgNode.svg() : null;
    } else {
      return null;
    }
  }

  render() {
    const styles = this.generateComponentStyles();
    return (
      <div
        className={styles.wrapper}
        onClick={this.props.options.captureMappings ? this.mappingClickHandler.bind(this) : undefined}
      >
        {this.svgContainerRefs.map((svgContainerRef) => {
          return <div className="test-test-test" ref={svgContainerRef}>
            <svg
              style={{
                width: `${this.props.width}px`,
                height: `${this.props.height}px`,
                position: 'absolute',
                zIndex: 1,
                pointerEvents: 'none',
                visibility: this.props.options.enableGeomap ? 'visible' : 'hidden'
              }}
              className={'svg-object'}
              ref={(ref) => this.renderSVG(ref)}
            ></svg>
          </div>
        })}
        <svg
          style={{
            width: `${this.props.width}px`,
            height: `${this.props.height}px`,
            position: 'absolute',
            zIndex: 1,
            pointerEvents: 'none',
            visibility: this.props.options.enableGeomap ? 'hidden' : 'visible'
          }}
          className={'svg-object'}
          ref={(ref) => {
            this.svgElement = ref;
            return this.renderSVG(ref);
          }}
        ></svg>
        <div style={{
          visibility: this.props.options.enableGeomap ? 'visible' : 'hidden',
          width: `${this.props.width}px`,
          height: `${this.props.height}px`,
          position: 'absolute'
        }} ref={this.mapRef} />
      </div>
    );
  }

  private generateComponentStyles = () => {
    return {
      wrapper: css`
        position: relative;
      `,
      svg: css`
        position: absolute;
        top: 0;
        left: 0;
      `,
      textBox: css`
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 10px;
      `,
    };
  };
}
