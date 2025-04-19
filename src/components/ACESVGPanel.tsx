import React from 'react';
import { GrafanaTheme2, PanelProps } from '@grafana/data';
import { Dom as SVGDom, Element as SVGElement, extend as SVGExtend, Runner as SVGRunner, SVG } from '@svgdotjs/svg.js';
import { ACESVGOptions, SVGIDMapping } from 'types';
import { useTheme2 } from '@grafana/ui';

interface MappedElements {
  [key: string]: SVGDom;
}

interface Props extends PanelProps<ACESVGOptions> {
  readonly theme?: GrafanaTheme2;
}

interface PanelState {
  readonly svgNode: SVGElement | SVGDom | null; // Passed into user JS functions as `svgnode`
  readonly mappedElements: MappedElements | null; // Passed into user JS functions as `svgmap`
  readonly initialized: boolean; // Determines whether or not the initialize function has been called
}

interface TextMappedElement extends SVGElement {
  readonly textElement: Element;
}

SVGExtend(SVGElement, {
  openOnClick: function (this: SVGElement, url: string) {
    this.click(() => window.open(url));
  },
  animateContRotate: function (this: SVGElement, speed: number) {
    return (
      this.animate(speed)
        .ease('-')
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

class ACESVGPanel extends React.PureComponent<Props, PanelState> {
  private readonly STOP_MAPPING_ID_TAG: string = 'mapping-stop';
  constructor(props: Props) {
    super(props);
    this.state = {
      svgNode: null,
      mappedElements: null,
      initialized: false,
    };
  }

  private initializeMappings(svgNode: SVGElement | SVGDom): void {
    const mappedElements: MappedElements = {};
    for (const mapping of this.props.options.svgMappings) {
      if (mapping.svgId) {
        const found: SVGDom | null = svgNode.findOne('#' + mapping.svgId);
        if (found) {
          mappedElements[mapping.mappedName || mapping.svgId] = found;
        } else {
          console.error('No SVG element found with ID: ' + mapping.svgId);
        }
      }
    }
    this.setState({ mappedElements: mappedElements });
  }

  private mapAllIDs(svgNode: SVGDom): void {
    const svgMappings: SVGIDMapping[] = [...this.props.options.svgMappings];
    const nodeFilterID: NodeFilter = {
      acceptNode(node: Element) {
        if (node.id) {
          return NodeFilter.FILTER_ACCEPT;
        }
        return NodeFilter.FILTER_SKIP;
      },
    };
    const svgWalker: TreeWalker = document.createTreeWalker(svgNode.node, NodeFilter.SHOW_ELEMENT, nodeFilterID);
    let currentNode: Element | null = svgWalker.currentNode as Element;
    while (currentNode) {
      if (currentNode.id && !svgMappings.map(mapping => mapping.svgId).includes(currentNode.id)) {
        svgMappings.push({ svgId: currentNode.id, mappedName: '' });
      }
      currentNode = svgWalker.nextNode() as Element;
    }
    this.setState({ initialized: false });
    this.props.options.svgMappings = [...svgMappings];
    this.props.onOptionsChange(this.props.options);
    this.forceUpdate();
  }

  private mappingClickHandler(event: React.MouseEvent<HTMLElement, MouseEvent>): void {
    let clicked: Element = event.target as Element,
      loopCount = 0;
    const svgMappings: SVGIDMapping[] = [...this.props.options.svgMappings];
    while (!clicked.id) {
      loopCount++;
      if (loopCount > 20 || !clicked.parentElement) {
        return; // Could not find element
      }
      clicked = clicked.parentNode as Element;
      if (clicked.id === this.STOP_MAPPING_ID_TAG) {
        return; // Reached the base <div> element
      }
    }
    for (const mapping of svgMappings) {
      if (mapping.svgId === clicked.id) {
        return; // Mapping already exists
      }
    }
    svgMappings.push({ svgId: clicked.id, mappedName: '' });
    this.setState({ initialized: false });
    this.props.options.svgMappings = [...svgMappings];
    this.props.onOptionsChange(this.props.options);
    this.forceUpdate();
  }

  private renderSVG(element: SVGSVGElement | null): string | null {
    // Parent element must not be null.
    if (!element) {
      return null;
    }

    // if (this.props.options.addAllIDs || this.props.options.forceReinit) {
    //   this.setState({ initialized: false });
    // }

    // Render SVG from source and initialize mappings.
    if (!this.state.initialized) {
      const svgNode = SVG(element);
      svgNode.clear();
      svgNode.svg(this.props.options.svgSource);
      svgNode.size(this.props.width, this.props.height);
      if (this.props.options.addAllIDs) {
        this.mapAllIDs(svgNode);
      }
      this.initializeMappings(svgNode);
      this.setState({ svgNode: svgNode });
    }

    // Element mapping must be completed to proceed.
    if (this.state.mappedElements === null) {
      return null;
    }

    // Call the user-defined init function.
    if (!this.state.initialized) {
      try {
        Function(
          'props',
          'theme',
          'data',
          'options',
          'svgnode',
          'svgmap',
          'context',
          this.props.replaceVariables(this.props.options.initSource)
        )(
          this.props,
          this.props.theme,
          this.props.data,
          this.props.options,
          this.state.svgNode,
          this.state.mappedElements,
          this.context
        );
      } catch (e) {
        console.error('User init code failed:', e);
      }
      this.setState({ initialized: true });
    }

    // Call the user-defined render function.
    if (this.state.initialized) {
      try {
        Function(
          'props',
          'theme',
          'data',
          'options',
          'svgnode',
          'svgmap',
          'context',
          this.props.replaceVariables(this.props.options.eventSource)
        )(
          this.props,
          this.props.theme,
          this.props.data,
          this.props.options,
          this.state.svgNode,
          this.state.mappedElements,
          this.context
        );
      } catch (e) {
        console.error('User event code failed:', e);
      }
    }

    return this.state.svgNode ? this.state.svgNode.svg() : null;
  }

  public render(): React.JSX.Element {
    return (
      <div
        id={this.STOP_MAPPING_ID_TAG}
        onClick={this.props.options.captureMappings ? (e) => this.mappingClickHandler(e) : undefined}
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

/**
 * Functional component wrapper for `ACESVGPanel`, allowing the use of
 * the `useTheme2()` React hook, which is not allowed in class components.
 */
export const Panel: React.FC<Props> = (props) => <ACESVGPanel {...props} theme={useTheme2()} />;
