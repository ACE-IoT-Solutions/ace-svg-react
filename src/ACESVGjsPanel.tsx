import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory, useTheme } from '@grafana/ui';
// import { stylesFactory } from '@grafana/ui';
import { SVG, SvgType, Element as SVGElement, Dom as SVGDom, extend as SVGExtend} from '@svgdotjs/svg.js';
import { componentDidMount } from '@grafana/data/types/panelEvents';
import { filterFramesByRefIdTransformer } from '@grafana/data/transformations/transformers/filterByRefId';
// import { SVG, extend as SVGextend, Element as SVGElement, Dom as SVGDom, get as SVGGet } from '@svgdotjs/svg.js';

interface Props extends PanelProps<SimpleOptions> {}
interface State {
  svgNode: SvgType;
}
  SVGExtend(SVGElement, {
    animateContRotate: function (speed) {
      return this.animate(1000).ease('-').rotate(360).loop();
    },
    stopAnimation: function () {
      this.timeline().stop();
    }
  })
  SVGExtend(SVGDom, {
    updateXHTMLFontText: function (newText: String) {
      let currentElement = this.node;
      while (currentElement.localName !== "xhtml:font") {
        currentElement = currentElement.firstElementChild;
      }
      currentElement.innerHTML = newText;
    }
  })

// export class SimplePanel extends PureComponent<Props, State> = ({ options, data, width, height }) => {
export class SimplePanel extends PureComponent<Props, State> {
  options = this.props.options;
  data = this.props.data;
  width = this.props.width;
  height = this.props.height;
  state = {
      svgElements: {},
      initFunctionSource: this.options.initSource,
      initFunction: Function('data', 'options', 'svgnode', 'svgmap', this.options.initSource),
      eventFunctionSource: this.options.eventSource,
      eventFunction: Function('data', 'options', 'svgnode', 'svgmap', this.options.eventSource),
      initialized: false
    };


  initializeMappings(svgNode: any) {
    for (let i = 0; i < this.options.svgMappings.length; i++) {
      if (this.options.svgMappings[i].mappedName !== '') {
        this.state.svgElements[this.options.svgMappings[i].mappedName] = svgNode.findOne(
          `#${this.options.svgMappings[i].svgId}`
        );
      }
    }
  }
  clickHandler(event: any) {
    console.log(event)
  }
  renderSVG(element: any) {
    this.options = this.props.options;
    this.data = this.props.data;
    this.width = this.props.width;
    this.height = this.props.height;
    this.options.svgMappings = [
      {
        mappedName: 'fillGuageLevel',
        svgId: 'rect2062-8',
      },
      {
        mappedName: 'oldPumpText',
        svgId: 'switch823',
      },
      {
        mappedName: 'pumpName1',
        svgId: 'tspan4334-3-3',
      },
      {
        mappedName: 'pumpName2',
        svgId: 'tspan4334-3',
      },
      {
        mappedName: 'pumpName3',
        svgId: 'tspan4334-0',
      },
      {
        mappedName: 'pumpMotion2',
        svgId: 'motion_x5F_path-9',
      },
      {
        mappedName: 'pumpMotion3',
        svgId: 'motion_x5F_path-7',
      },
      {
        mappedName: 'pumpRuntime1',
        svgId: 'switch859-6',
      },
      {
        mappedName: 'pumpRuntime2',
        svgId: 'switch859-6-5',
      },
      {
        mappedName: 'pumpRuntime3',
        svgId: 'switch859-6-0',
      },
      {
        mappedName: 'pumpMotion1',
        svgId: 'motion_x5F_path-9-0',
      },
      {
        mappedName: 'pumpStartsTitle1',
        svgId: 'switch839-5',
      },
      {
        mappedName: 'pumpStartsTitle2',
        svgId: 'switch839-5-8',
      },
      {
        mappedName: 'pumpStartsTitle3',
        svgId: 'switch839-5-4',
      },
      {
        mappedName: 'pumpStartsCount1',
        svgId: 'switch859-6-6',
      },
      {
        mappedName: 'pumpStartsCount2',
        svgId: 'switch859-6-6-0',
      },
      {
        mappedName: 'pumpStartsCount3',
        svgId: 'switch859-6-6-5',
      },
      {
        mappedName: 'pumpkW1',
        svgId: 'switch859-3',
      },
      {
        mappedName: 'pumpkW2',
        svgId: 'switch859-3-7',
      },
      {
        mappedName: 'pumpkW3',
        svgId: 'switch859-3-0',
      },
    ];
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
        this.state.initFunction = Function('data', 'options', 'svgnode', 'svgmap', this.options.initSource);

        try {
          this.state.initFunction(this.data, this.options, this.state.svgNode, this.state.svgElements);
        } catch (e) {
          console.log(`User init code failed: ${e}`);
        }
        this.state.initialized = true;
      }
      if(this.options.eventSource !== this.state.eventFunctionSource) {
        this.state.eventFunction = Function('data', 'options', 'svgnode', 'svgmap', this.options.eventSource);
      }

      try {
        this.state.eventFunction(this.data, this.options, this.state.svgNode, this.state.svgElements);
      } catch (e) {
        console.log(`User event code failed: ${e}`);
      }

      return this.state.svgNode.svg();
    }
  };

  render() {
    // const theme = useTheme();
    const styles = this.getStyles();
    return (
      <div
        className={cx(
          styles.wrapper,
          css`
            width: ${this.width}px;
            height: ${this.height}px;
          `
        )}
        onClick={this.clickHandler}
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
