import { PanelPlugin } from '@grafana/data';
import { ACESVGOptions } from './types';
import { ACESVGPanel } from './ACESVGjsPanel';
import { optionsBuilder } from './options'


export const plugin = new PanelPlugin<ACESVGOptions>(ACESVGPanel).setPanelOptions(optionsBuilder);
