import React from 'react';
import { Stack, Input, Tooltip } from '@grafana/ui';
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
        <Tooltip content={'This is the SVG ID attribute value, found from \`<element id="example">\` in the SVG source.'}>
          <Input
            type='text'
            defaultValue={this.props.value.svgId}
            placeholder='SVG ID'
            onInput={(e) => {
              const newState: SVGIDMapping = { svgId: e.currentTarget.value, mappedName: this.state?.mappedName ?? this.props.value.mappedName };
              this.setState(newState);
              this.props.onChange(newState);
            }}
          />
        </Tooltip>
        <Tooltip content={'The user-defined mapped name is accessed by \`svgmap.example\` in the user JavaScript code.'}>
          <Input
            type='text'
            defaultValue={this.props.value.mappedName}
            placeholder='Mapped name'
            onInput={(e) => {
              const newState: SVGIDMapping = { svgId: this.state?.svgId ?? this.props.value.svgId, mappedName: e.currentTarget.value };
              this.setState(newState);
              this.props.onChange(newState);
            }}
          />
        </Tooltip>
      </Stack>
    );
  }
}
