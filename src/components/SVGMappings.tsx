import React from 'react';
import { PanelOptionsEditorProps } from '@grafana/data';
import { Stack } from '@grafana/ui';
import { SVGIDMapping } from 'types';
import { SVGMappingAdd } from './SVGMappingAdd';
import { SVGMappingItem } from './SVGMappingItem';

/**
 * The React Component for the entire list of SVG mappings.
 */
export class SvgMappings extends React.PureComponent<PanelOptionsEditorProps<SVGIDMapping[]>> {
  /**
   * Adds a new SVG mapping.
   */
  private onAdd(mapping: SVGIDMapping): void {
    this.props.onChange([...this.props.value, mapping]);
  }
  /**
   * Updates an existing SVG mapping.
   */
  private onChange(index: number, mapping: SVGIDMapping): void {
    const mappings: SVGIDMapping[] = [...this.props.value];
    mappings[index] = mapping;
    this.props.onChange(mappings);
  }
  /**
   * Deletes an existing SVG mapping.
   */
  private onDelete(index: number): void {
    const mappings: SVGIDMapping[] = [...this.props.value];
    mappings.splice(index, 1);
    this.props.onChange(mappings);
  }
  /**
   * Clears the entire list of SVG mappings.
   */
  private onClear(): void {
    this.props.onChange([]);
  }
  /**
   * Render the editor component.
   */
  public render(): React.JSX.Element {
    return (
      <Stack direction={'column'}>
        <SVGMappingAdd onAdd={(mapping) => this.onAdd(mapping)} onClear={() => this.onClear()} />
        {this.props.value.map((mapping, i) => <SVGMappingItem key={JSON.stringify(mapping)} value={mapping} onChange={(mapping) => this.onChange(i, mapping)} onDelete={() => this.onDelete(i)} />)}
      </Stack>
    );
  }
}
