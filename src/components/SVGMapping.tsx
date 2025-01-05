import React from 'react';
import { Stack, Input } from '@grafana/ui';
import { SVGIDMapping } from 'types';

interface SVGMappingProps {
  readonly value: SVGIDMapping;
  readonly onChange: (mapping: SVGIDMapping) => void;
}

/**
 * The React Component containing two text boxes for the SVG ID and mapped name.
 */
export class SvgMapping extends React.PureComponent<SVGMappingProps, SVGIDMapping> {
  public render(): React.JSX.Element {
    return (
      <Stack>
        <Input
          type='text'
          defaultValue={this.props.value.svgId}
          placeholder='SVG ID'
          onBlur={(e) => {
            const newState: SVGIDMapping = { svgId: e.currentTarget.value, mappedName: this.state?.mappedName ?? this.props.value.mappedName };
            this.setState(newState);
            this.props.onChange(newState);
          }}
        />
        <Input
          type='text'
          defaultValue={this.props.value.mappedName}
          placeholder='Mapped name'
          onBlur={(e) => {
            const newState: SVGIDMapping = { svgId: this.state?.svgId ?? this.props.value.svgId, mappedName: e.currentTarget.value };
            this.setState(newState);
            this.props.onChange(newState);
          }}
        />
      </Stack>
    );
  }
}
