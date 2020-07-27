export interface SVGIDMapping {
  svgId: string;
  mappedName: string;
}
export interface ACESVGOptions {
  captureMappings: boolean;
  svgSource: string;
  svgAutocomplete: boolean;
  eventSource: string;
  eventAutocomplete: boolean;
  initSource: string;
  initAutocomplete: boolean;
  svgMappings: SVGIDMapping[];
}
