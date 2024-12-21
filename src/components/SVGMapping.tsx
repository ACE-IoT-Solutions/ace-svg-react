import React from 'react';
import { Button, Stack, Input, Label, Tooltip } from '@grafana/ui';
import { SVGIDMapping } from 'types';

interface SVGIDMappingProps {
  readonly value: SVGIDMapping;
  readonly index?: number;
  readonly onChangeItem?: (a: SVGIDMapping, b: number) => void | undefined;
  readonly onAdd?: (a: SVGIDMapping) => void;
  readonly onDelete?: (a: number) => void;
}

export class SvgMapping extends React.PureComponent<SVGIDMappingProps, SVGIDMapping> {
  public render(): React.JSX.Element {
    return (
      <Stack>
        <Label>SVG ID</Label>
        <Input
          type="text"
          name="svgId"
          defaultValue={this.props.value.svgId}
          onBlur={(e) => {
            const svgId = e.target.value;
            this.setState({ svgId: svgId });
            this.props.onChangeItem && this.props.index && this.props.onChangeItem({ ...this.props.value, svgId: svgId }, this.props.index);
          }}
        />
        <Label>Mapped Name</Label>
        <Input
          type="text"
          name="mappedName"
          defaultValue={this.props.value.mappedName}
          onBlur={(e) => {
            const mappedName = e.currentTarget.value;
            this.setState({ mappedName: mappedName });
            this.props.onChangeItem && this.props.index && this.props.onChangeItem({ ...this.props.value, mappedName: mappedName }, this.props.index);
          }}
        />
        {this.props.value.svgId && this.props.onDelete && this.props.index !== undefined && (
          <Tooltip content="Delete this mapping" theme={'info'}>
            <Button
              variant="destructive"
              icon="trash-alt"
              size="sm"
              onClick={() => {
                this.props.onDelete!(this.props.index!);
              }}
            >
              Remove
            </Button>
          </Tooltip>
        )}
        {!this.props.value.svgId && this.props.onAdd && (
          <Tooltip content="Add a new SVG Element ID to svgmap property mapping manually" theme={'info'}>
            <Button
              variant="secondary"
              size="sm"
              icon="plus-circle"
              onClick={() => {
                this.props.onAdd!(this.state as SVGIDMapping);
              }}
            >
              Add
            </Button>
          </Tooltip>
        )}
      </Stack>
    );
  }
}
