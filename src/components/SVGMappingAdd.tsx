import React from 'react';
import { Button, Stack, Tooltip } from '@grafana/ui';
import { SVGIDMapping } from 'types';
import { SvgMapping } from './SVGMapping';

interface SVGMappingAddProps {
  readonly onAdd: (mapping: SVGIDMapping) => void;
  readonly onClear: () => void;
}

/**
 * The React Component for adding new or clearing all SVG mappings.
 */
export class SVGMappingAdd extends React.PureComponent<SVGMappingAddProps, SVGIDMapping> {
  /**
   * Check to see if the new mapping is valid.
   */
  private canAdd(): boolean {
    return !!this.state && !!this.state.svgId && !!this.state.mappedName;
  }
  /**
   * Render this component.
   */
  public render(): React.JSX.Element {
    return (
      <Stack>
        <Tooltip content={'Clear the list of all SVG element ID to svgmap property mappings.'}>
          <Button icon={'trash-alt'} variant={'destructive'} onClick={this.props.onClear} />
        </Tooltip>
        <SvgMapping value={{ svgId: '', mappedName: '' }} onChange={(mapping) => this.setState(mapping)} />
        <Tooltip content={'Add this new SVG mapping to the list.'}>
          <Button icon={'plus-circle'} onClick={() => this.canAdd() && this.props.onAdd(this.state)} />
        </Tooltip>
      </Stack>
    );
  }
}
