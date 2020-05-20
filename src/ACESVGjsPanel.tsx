import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import { ACESVGOptions, SVGIDMapping } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory, useTheme } from '@grafana/ui';
// import { stylesFactory } from '@grafana/ui';
import {
  SVG,
  SvgType,
  Element as SVGElement,
  Dom as SVGDom,
  extend as SVGExtend,
  Runner as SVGRunner,
} from '@svgdotjs/svg.js';
// import { componentDidMount } from '@grafana/data/types/panelEvents';
// import { filterFramesByRefIdTransformer } from '@grafana/data/transformations/transformers/filterByRefId';
// import { SVG, extend as SVGextend, Element as SVGElement, Dom as SVGDom, get as SVGGet } from '@svgdotjs/svg.js';

interface MappedElements {
  [key: string]: SVGElement;
}
interface Props extends PanelProps<ACESVGOptions> {}
interface State {
  svgNode: SvgType | null;
  mappedElements: MappedElements;
  initFunctionSource: String;
  initFunction: Function;
  eventFunctionSource: String;
  eventFunction: Function;
  initialized: Boolean;
}
SVGExtend(SVGElement, {
  animateContRotate: function(this: SVGElement, speed: number) {
    return this.animate(1000)
      .ease('-')
      .rotate(360)
      .loop();
  },
  stopAnimation: function(this: SVGRunner) {
    this.timeline().stop();
  },
});
SVGExtend(SVGDom, {
  updateXHTMLFontText: function(this: SVGDom, newText: string) {
    let currentElement = this.node;
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
export class ACESVGPanel extends PureComponent<Props, State> {
  options = this.props.options;
  data = this.props.data;
  width = this.props.width;
  height = this.props.height;
  state = {
    svgNode: null,
    mappedElements: {},
    initFunctionSource: this.options.initSource,
    initFunction: Function('data', 'options', 'svgnode', 'svgmap', this.options.initSource),
    eventFunctionSource: this.options.eventSource,
    eventFunction: Function('data', 'options', 'svgnode', 'svgmap', this.options.eventSource),
    initialized: false,
  };

  initializeMappings(svgNode: any) {
    for (let i = 0; i < this.options.svgMappings.length; i++) {
      if (this.options.svgMappings[i].mappedName !== '') {
        this.state.mappedElements[this.options.svgMappings[i].mappedName] = svgNode.findOne(
          `#${this.options.svgMappings[i].svgId}`
        );
      }
    }
  }
  mappingClickHandler(event: any) {
    let loopCount = 0;
    let clicked = event.target;
    while (clicked.id === '') {
      loopCount++;
      if(loopCount > 20) {
        return;
      }
      clicked = clicked.parentNode;
    }
    for (let i = 0; i < this.props.options.svgMappings.length; i++) {
      if (this.props.options.svgMappings[i].svgId === clicked.id) {
        return;
      }
    }
    this.props.options.svgMappings.push({ svgId: clicked.id, mappedName: '' });
  }
  renderSVG(element: any) {
    if (element) {
      if (this.options.initSource !== this.state.initFunctionSource) {
        this.state.initialized = false;
      }
      if (!this.state.initialized) {
        let svgNode = SVG(element);
        svgNode.clear();
        svgNode.svg(this.options.svgSource);
        svgNode.size(this.width);
        this.initializeMappings(svgNode);
        this.state.svgNode = svgNode;

        try {
          this.state.initFunction = Function('data', 'options', 'svgnode', 'svgmap', this.options.initSource);
          this.state.initFunction(this.props.data, this.props.options, this.state.svgNode, this.state.mappedElements);
          this.state.initialized = true;
        } catch (e) {
          console.log(`User init code failed: ${e}`);
        }
      }

      try {
        if (this.options.eventSource !== this.state.eventFunctionSource) {
          this.state.eventFunction = Function('data', 'options', 'svgnode', 'svgmap', this.options.eventSource);
        }
        this.state.eventFunction(this.props.data, this.props.options, this.state.svgNode, this.state.mappedElements);
      } catch (e) {
        console.log(`User event code failed: ${e}`);
        this.state.initialized = false;
      }

      return this.state.svgNode.svg();
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
