import React from 'react';
import { Button, Stack } from '@grafana/ui';
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
        <Button aria-label={'Clear'} icon={'trash-alt'} variant={'destructive'} onClick={this.props.onClear} tooltip={'Clear the list of all SVG element ID to svgmap property mappings.'} />
        <SvgMapping value={{ svgId: '', mappedName: '' }} onChange={(mapping) => this.setState(mapping)} />
        <Button aria-label={'Add'} icon={'plus-circle'} onClick={() => this.canAdd() && this.props.onAdd(this.state)} tooltip={'Add this new SVG mapping to the list.'} />
      </Stack>
    );
  }
}
