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

export class SvgMapping extends React.PureComponent<SVGIDMappingProps> {
  constructor(props: SVGIDMappingProps) {
    super(props);
    this.state = { ...props.value };
  }

  public render(): React.JSX.Element {
    const { value, index, onChangeItem, onAdd, onDelete } = this.props;
    return (
      <Stack>
        <Label>SVG ID</Label>
        <Input
          type="text"
          name="svgId"
          defaultValue={value.svgId}
          // css={config.theme}
          onBlur={(e) => {
            const svgId = e.currentTarget.value;
            this.setState({ svgId: svgId });
            onChangeItem && index && onChangeItem({ ...value, svgId: svgId }, index);
          }}
        />
        <Label>Mapped Name</Label>
        <Input
          type="text"
          name="mappedName"
          defaultValue={value.mappedName}
          // css={config.theme}
          onBlur={(e) => {
            const mappedName = e.currentTarget.value;
            this.setState({ mappedName: mappedName });
            onChangeItem && index && onChangeItem({ ...value, mappedName: mappedName }, index);
          }}
        />
        {value.svgId && onDelete && index !== undefined && (
          <Tooltip content="Delete this mapping" theme={'info'}>
            <Button
              variant="destructive"
              icon="trash-alt"
              size="sm"
              onClick={() => {
                onDelete(index);
              }}
            >
              Remove
            </Button>
          </Tooltip>
        )}
        {!value.svgId && onAdd && (
          <Tooltip content="Add a new SVG Element ID to svgmap property mapping manually" theme={'info'}>
            <Button
              variant="secondary"
              size="sm"
              icon="plus-circle"
              onClick={() => {
                onAdd(this.state as SVGIDMapping);
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
