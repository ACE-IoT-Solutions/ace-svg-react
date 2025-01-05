/**
 * An SVG ID mapping.
 */
export interface SVGIDMapping {
  /**
   * The ID property of the SVG element.
   */
  readonly svgId: string;
  /**
   * The mapped name of the SVG element.
   */
  readonly mappedName: string;
}
/**
 * Options for this panel.
 */
export interface ACESVGOptions {
  /**
   * Enable capture on click?
   */
  readonly captureMappings: boolean;
  /**
   * Add all SVG element IDs?
   */
  readonly addAllIDs: boolean;
  /**
   * The SVG source code.
   */
  readonly svgSource: string;
  /**
   * The user JS initialization source code.
   */
  readonly initSource: string;
  /**
   * The user JS render source code.
   */
  readonly eventSource: string;
  /**
   * The list of SVG mappings.
   */
  svgMappings: SVGIDMapping[];
}
