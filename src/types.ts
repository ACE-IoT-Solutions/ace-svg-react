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
