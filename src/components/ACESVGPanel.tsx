import React from 'react';
import { PanelProps } from '@grafana/data';
import { ACESVGOptions } from 'types';
import { useTheme2 } from '@grafana/ui';

export const ACESVGPanel: React.FC<PanelProps<ACESVGOptions>> = (props) => {
    const theme = useTheme2();

    return <svg></svg>;
};
