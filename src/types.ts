export interface SVGIDMapping {
  readonly svgId: string;
  readonly mappedName: string;
}
export interface ACESVGOptions {
  readonly captureMappings: boolean;
  readonly addAllIDs: boolean;
  readonly svgSource: string;
  readonly svgAutocomplete: boolean;
  readonly eventSource: string;
  readonly eventAutocomplete: boolean;
  readonly initSource: string;
  readonly initAutocomplete: boolean;
  svgMappings: SVGIDMapping[];
}
export interface ACESVGDefaults {
  readonly svgNode: string;
  readonly initSource: string;
  readonly eventSource: string;
  readonly svgMappings: SVGIDMapping[];
}
