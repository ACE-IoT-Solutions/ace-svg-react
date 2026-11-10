/**
 * An SVG ID mapping.
 */
export interface SVGIDMapping {
  /**
   * The value of the SVG element's `id` attribute.
   */
  readonly svgId: string;
  /**
   * The property name used to expose the element on `svgmap`.
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
