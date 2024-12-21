import React from 'react';
import { PanelOptionsEditorProps } from '@grafana/data';
import { Stack, Tooltip, Button } from '@grafana/ui';
import { SVGIDMapping } from 'types';
import { SvgMapping } from './SVGMapping';

export class SvgMappings extends React.PureComponent<PanelOptionsEditorProps<SVGIDMapping[]>> {
  private readonly onChangeItem = (updatedMapping: SVGIDMapping, index: number): void => {
    const newMappings = [...this.props.value];
    newMappings[index] = updatedMapping;
    this.props.onChange(newMappings);
  };

  private readonly onAdd = (newMapping: SVGIDMapping): void => {
    if (newMapping.svgId !== '') {
      const newMappings = [...this.props.value, newMapping];
      this.props.onChange(newMappings);
    }
  };

  private readonly onDelete = (index: number): void => {
    const newMappings = [...this.props.value];
    newMappings.splice(index, 1);
    this.props.onChange(newMappings);
  };

  public render(): React.JSX.Element {
    const svgMappings = this.props.value;
    return (
      <Stack direction={'column'}>
        <Stack>
          <Tooltip content="Clear all SVG Element ID to svgmap property mappings" theme="info">
            <Button
              variant="destructive"
              icon="trash-alt"
              size="sm"
              onClick={() => {
                this.props.onChange([]);
              }}
            >
              Clear All
            </Button>
          </Tooltip>
          <SvgMapping value={{ svgId: '', mappedName: '' }} onAdd={this.onAdd} />
        </Stack>
        {svgMappings.map((currentMapping: SVGIDMapping, index: number) => {
          return (
            <SvgMapping
              key={currentMapping.svgId}
              value={currentMapping}
              index={index}
              onChangeItem={this.onChangeItem}
              onDelete={this.onDelete}
            />
          );
        })}
      </Stack>
    );
  }
}
