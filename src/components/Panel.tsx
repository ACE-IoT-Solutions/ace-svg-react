import React from 'react';
import { PanelProps } from '@grafana/data';
import { ACESVGOptions } from 'types';
import { useStyles2, useTheme2 } from '@grafana/ui';
import { PanelDataErrorView } from '@grafana/runtime';

interface Props extends PanelProps<ACESVGOptions> { }

export const SimplePanel: React.FC<Props> = ({ options, data, width, height, fieldConfig, id }) => {
  const theme = useTheme2();
  const styles = useStyles2(getStyles);

  if (data.series.length === 0) {
    return <PanelDataErrorView fieldConfig={fieldConfig} panelId={id} data={data} needsStringField />;
  }

  return (
    <div>
      <svg style={{ width: width + 'px', height: height + 'px' }} className='svg-object' ref={ref => ref}></svg>
    </div>
  );
};
