import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import { ACESVGOptions, SVGIDMapping } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';
// import { stylesFactory } from '@grafana/ui';
import {
  SVG,
  Element as SVGElement,
  Dom as SVGDom,
  extend as SVGExtend,
  Runner as SVGRunner,
} from '@svgdotjs/svg.js';
// import { componentDidMount } from '@grafana/data/types/panelEvents';
// import { filterFramesByRefIdTransformer } from '@grafana/data/transformations/transformers/filterByRefId';
// import { SVG, extend as SVGextend, Element as SVGElement, Dom as SVGDom, get as SVGGet } from '@svgdotjs/svg.js';

interface MappedElements {
  [key: string]: SVGElement | SVGDom;
}
interface Props extends PanelProps<ACESVGOptions> {}
interface PanelState {
  svgNode: SVGElement | SVGDom | null;
  mappedElements: MappedElements;
  svgMappings: Array<SVGIDMapping>;
  initFunctionSource: string;
  initFunction: Function;
  eventFunctionSource: string;
  eventFunction: Function;
  initialized: Boolean;
}
SVGExtend(SVGElement, {
  animateContRotate: function(this: SVGElement, speed: number) {
    return this.animate(1000)
    //@ts-ignore
      .ease('-')
    //@ts-ignore
      .rotate(360)
      .loop();
  },
  stopAnimation: function(this: SVGRunner) {
    this.timeline().stop();
  },
  getParentNode: function(this: SVGElement) {
    return this.node.parentNode;
  },
  getTopNode: function(this: SVGElement) {
    let currentNode: Node | ParentNode = this.node;
    while (true) {
      if (currentNode.parentNode && !currentNode.parentNode.className.baseVal.includes('svg-object')){
        currentNode = currentNode.parentNode;
      } else {
        return this.node.parentNode;
      }
    }
  }
});
SVGExtend(SVGDom, {
  updateXHTMLFontText: function(this: SVGDom, newText: string) {
    let currentElement: Element = this.node;
    while (currentElement.localName !== 'xhtml:font') {
      if (currentElement.firstElementChild) {
        currentElement = currentElement.firstElementChild;
      } else {
        return;
      }
    }
    currentElement.innerHTML = newText;
  },
});

// export class SimplePanel extends PureComponent<Props, State> = ({ options, data, width, height }) => {
export class ACESVGPanel extends PureComponent<Props, PanelState> {
  state: PanelState = {
    svgNode: null,
    svgMappings: this.props.options.svgMappings,
    mappedElements: {},
    initFunctionSource: this.props.options.initSource || '',
    initFunction: Function('data', 'options', 'svgnode', 'svgmap', this.props.options.initSource),
    eventFunctionSource: this.props.options.eventSource || '',
    eventFunction: Function('data', 'options', 'svgnode', 'svgmap', this.props.options.eventSource),
    initialized: false,
  };

  initializeMappings(svgNode: SVGElement | SVGDom) {
    const svgMappings = this.props.options.svgMappings;
    let currentElements: MappedElements = { ...this.state.mappedElements };
    for (let i = 0; i < svgMappings.length; i++) {
      if (svgMappings[i].mappedName !== '') {
        currentElements[this.props.options.svgMappings[i].mappedName] = svgNode.findOne(
          `#${this.props.options.svgMappings[i].svgId}`
        );
      }
    }
    this.state.mappedElements = currentElements;
    this.setState({mappedElements: currentElements})
  }

  mappingClickHandler(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (event.target) {
      let clicked = event.target as Element;
      let loopCount = 0;
      let svgMappings: Array<SVGIDMapping> = [...this.props.options.svgMappings]
      if (clicked.id) {
        while (clicked.id === '') {
          loopCount++;
          if (loopCount > 20)  {
            return;
          }
          clicked = clicked.parentNode as Element;
        }
        for (let i = 0; i < svgMappings.length; i++) {
          if (svgMappings[i].svgId === clicked.id) {
            return;
          }
        }
        this.props.options.svgMappings = [...svgMappings, { svgId: clicked.id, mappedName: '' }];
      }
    }
  }
  renderSVG(element: SVGSVGElement | SVGDom | null) {
    if (element) {
      if (this.props.options.initSource !== this.state.initFunctionSource || this.state.svgMappings !== this.props.options.svgMappings) {
        this.state.initFunctionSource = this.props.options.initSource
        console.log("changed")
        this.state.initialized = false;
      }
      if (!this.state.initialized) {
        let svgNode = SVG(element);
        svgNode.clear();
        svgNode.svg(this.props.options.svgSource);
        svgNode.size(this.props.width);
        this.initializeMappings(svgNode);
        this.state.svgNode = svgNode;

        try {
          this.state.initFunction = Function(
            'data',
            'options',
            'svgnode',
            'svgmap',
            this.props.replaceVariables(this.props.options.initSource)
          );
          this.state.initFunction(this.props.data, this.props.options, this.state.svgNode, this.state.mappedElements);
          this.state.initialized = true;
        } catch (e) {
          this.state.initialized = true;
          console.log(`User init code failed: ${e}`);
        }
      }

      try {
        if (this.props.options.eventSource !== this.state.eventFunctionSource) {
          this.state.eventFunctionSource = this.props.options.eventSource
          this.state.eventFunction = Function(
            'data',
            'options',
            'svgnode',
            'svgmap',
            this.props.replaceVariables(this.props.options.eventSource)
          );
        }
        this.state.eventFunction(this.props.data, this.props.options, this.state.svgNode, this.state.mappedElements);
      } catch (e) {
        console.log(`User event code failed: ${e}`);
      }

      return this.state.svgNode ? this.state.svgNode.svg() : null;
    } else {
      return null;
    }
  }

  render() {
    // const theme = useTheme();

    const styles = this.getStyles();
    return (
      <div
        className={cx(
          styles.wrapper,
          css`
            width: ${this.props.width}px;
            height: ${this.props.height}px;
          `
        )}
        onClick={this.props.options.captureMappings ? this.mappingClickHandler.bind(this) : undefined}
      >
        <svg className={'svg-object'} ref={ref => this.renderSVG(ref)}></svg>
      </div>
    );
  }

  getStyles = stylesFactory(() => {
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
  });
}
