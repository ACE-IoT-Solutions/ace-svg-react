import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './components/SimplePanel';
import { SourceCode, SourceCodeSettings } from 'components/CodeEditor';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).useFieldConfig().setPanelOptions((builder) => {
  return builder
    .addCustomEditor<SourceCodeSettings, string>({
      id: 'svgSource',
      path: 'svgSource',
      name: 'SVG Source',
      description: 'Editor for SVG Document, while small tweaks can be made here, we recommend using a dedicated Graphical SVG Editor and simply pasting the resulting XML here.',
      category: ['SVG Document'],
      settings: {
        language: 'xml',
      },
      editor: SourceCode,
    })
    .addCustomEditor<SourceCodeSettings, string>({
      id: 'initSource',
      path: 'initSource',
      name: 'User JS Initialization Code',
      description: 'The User JS Init code is executed once when the panel loads, you can use this to define helper functions that you later reference in the User JS Render code section. The sections have identical execution contexts, and any JS objects you want to reference between them will need to be attached to the options object as properties.',
      category: ['User JS Initialization'],
      settings: {
        language: 'javascript',
      },
      editor: SourceCode,
    })
    .addCustomEditor<SourceCodeSettings, string>({
      id: 'eventSource',
      path: 'eventSource',
      name: 'User JS Render Code',
      description: 'The User JS Render code is executed whenever new data is available, the root svg document is available as `svgnode`, and elements you\'ve mapped using the SVG Mapping tools below are available as properties on the `svgmap` object. The Grafana DataFrame is provided as `data` and the `options` object can be used to pass values and references between the Render context and the Init context.',
      category: ['User JS Render'],
      settings: {
        language: 'javascript',
      },
      editor: SourceCode,
    });
});
