export interface SVGIDMapping {
  svgId: string;
  mappedName: string;
}

export interface ACESVGOptions {
  captureMappings: boolean;
  addAllIDs: boolean;
  svgSource: string;
  eventSource: string;
  initSource: string;
  svgMappings: SVGIDMapping[];
}

export interface ACESVGDefaults {
  svgNode: string;
  initSource: string;
  eventSource: string;
  svgMappings: SVGIDMapping[];
}
