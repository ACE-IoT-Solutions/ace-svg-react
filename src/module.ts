import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './SimplePanel';
import { optionsBuilder } from './options'


export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions(optionsBuilder);
