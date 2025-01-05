import React from 'react';
import { Button, Stack, Tooltip } from '@grafana/ui';
import { SVGIDMapping } from 'types';
import { SvgMapping } from './SVGMapping';

interface SVGMappingItemProps {
  readonly value: SVGIDMapping;
  readonly onChange: (mapping: SVGIDMapping) => void;
  readonly onDelete: () => void;
}

/**
 * The React Component for a single SVG mapping.
 */
export class SVGMappingItem extends React.PureComponent<SVGMappingItemProps> {
  public render(): React.JSX.Element {
    return (
      <Stack>
        <SvgMapping value={this.props.value} onChange={(mapping) => this.props.onChange(mapping)} />
        <Tooltip content={'Remove this existing SVG mapping from the list.'}>
          <Button icon={'minus-circle'} variant={'destructive'} onClick={() => this.props.onDelete()} />
        </Tooltip>
      </Stack>
    );
  }
}
