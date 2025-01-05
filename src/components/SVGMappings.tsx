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
  private readonly mappings: SVGIDMapping[] = this.props.value;

  private onAdd(mapping: SVGIDMapping): void {
    this.mappings.push(mapping);
    this.props.onChange(this.mappings);
  }

  private onChange(index: number, mapping: SVGIDMapping): void {
    this.mappings[index] = mapping;
    this.props.onChange(this.mappings);
  }

  private onDelete(index: number): void {
    this.mappings.splice(index, 1);
    this.props.onChange(this.mappings);
  }

  private onClear(): void {
    this.mappings.length = 0;
    this.props.onChange(this.mappings);
  }

  public render(): React.JSX.Element {
    return (
      <Stack direction={'column'}>
        <SVGMappingAdd onAdd={(mapping) => this.onAdd(mapping)} onClear={() => this.onClear()} />
        {this.props.value.map((mapping, i) => <SVGMappingItem key={JSON.stringify(mapping)} value={mapping} onChange={(mapping) => this.onChange(i, mapping)} onDelete={() => this.onDelete(i)} />)}
      </Stack>
    );
  }
}
