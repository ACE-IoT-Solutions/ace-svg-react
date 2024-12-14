import { PanelPlugin } from '@grafana/data';
import { ACESVGOptions } from './types';
import { SimplePanel } from './components/Panel';
import { CodeEditor } from '@grafana/ui';

export const plugin = new PanelPlugin<ACESVGOptions>(SimplePanel).setPanelOptions((builder) => {
  return builder
    .addCustomEditor({
      category: ['SVG Document'],
      path: 'svgSource',
      name: 'SVG Source',
      description: 'Editor for SVG Document, while small tweaks can be made here, we recommend using a dedicated graphical SVG Editor and simply pasting the resulting XML here.',
      id: 'svgSource',
      defaultValue: '',
      editor(props) {
        return <CodeEditor/>;
      },
    })
    .addBooleanSwitch({
      path: 'showSeriesCount',
      name: 'Show series counter',
      defaultValue: false,
    })
    .addRadio({
      path: 'seriesCountSize',
      defaultValue: 'sm',
      name: 'Series counter size',
      settings: {
        options: [
          {
            value: 'sm',
            label: 'Small',
          },
          {
            value: 'md',
            label: 'Medium',
          },
          {
            value: 'lg',
            label: 'Large',
          },
        ],
      },
      showIf: (config) => config.showSeriesCount,
    });
});
