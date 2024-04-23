export interface SVGIDMapping {
  readonly svgId: string;
  readonly mappedName: string;
}
export interface ACESVGOptions {
  readonly captureMappings: boolean;
  readonly addAllIDs: boolean;
  readonly svgSource: string;
  readonly eventSource: string;
  readonly initSource: string;
  svgMappings: SVGIDMapping[];
}
export interface ACESVGDefaults {
  readonly svgNode: string;
  readonly initSource: string;
  readonly eventSource: string;
  readonly svgMappings: SVGIDMapping[];
}
