import { Dom as SVGDom, Element as SVGElement } from '@svgdotjs/svg.js';
import { InterpolateFunction, PanelData, PanelProps } from '@grafana/data';

export interface SVGIDMapping {
  svgId: string;
  mappedName: string;
}

export interface ACESVGOptions {
  captureMappings: boolean;
  addAllIDs: boolean;
  svgSource: string;
  svgAutocomplete: boolean;
  eventSource: string;
  eventAutocomplete: boolean;
  initSource: string;
  initAutocomplete: boolean;
  svgMappings: SVGIDMapping[];
}

export interface ACESVGDefaults {
  svgNode: string;
  initSource: string;
  eventSource: string;
  svgMappings: SVGIDMapping[];
}

export interface ACESVGElementProps {
  data: PanelData;
  options: ACESVGOptions;
  replaceVariables: InterpolateFunction;
  width: number;
  height: number;
  svgSource: string;
  initSource: string;
  eventSource: string;
  svgMappings: SVGIDMapping[];
  // svgSourceRef: SVGSVGElement | null;
}

export interface ACESVGElementState {
  svgNode: SVGElement | SVGDom | null;
  svgMappings: SVGIDMapping[];
  mappedElements: MappedElements | null;
  initialized: boolean;
  initFunction: Function | null;
  eventFunction: Function | null;
  svgRef: SVGSVGElement | null;
}

export interface MappedElements {
  [key: string]: SVGElement | SVGDom;
}

export interface Props extends PanelProps<ACESVGOptions> {}

export interface PanelState {
  addAllIDs: boolean; //
  svgNode: SVGElement | SVGDom | null; //
  svgSource: string | null;
  mappedElements: MappedElements | null; //
  svgMappings: SVGIDMapping[]; //
  initFunctionSource: string; //
  initFunction: Function | null; //
  eventFunctionSource: string; //
  eventFunction: Function | null; //
  initialized: boolean;
  context: any;
  // svgSourceRef: SVGSVGElement | null;
}

export interface TextMappedElement extends SVGElement {
  textElement: Element;
}
