import { PanelPlugin } from '@grafana/data';
import { ACESVGOptions } from 'types';
import { defaults } from 'defaults';
import { ACESVGPanel } from 'components/ACESVGPanel';
import { SourceCode, SourceCodeSettings } from 'components/SourceCode';
import { SvgMappings } from 'components/SVGMappings';

export const plugin = new PanelPlugin<ACESVGOptions>(ACESVGPanel).useFieldConfig().setPanelOptions((builder) => {
  return builder
    .addCustomEditor<SourceCodeSettings, string>({
      id: 'svgSource',
      path: 'svgSource',
      name: 'SVG Source',
      description: 'Editor for SVG Document, while small tweaks can be made here, we recommend using a dedicated Graphical SVG Editor and simply pasting the resulting XML here.',
      category: ['SVG Document'],
      defaultValue: defaults.svgSource,
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
      defaultValue: defaults.initSource,
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
      defaultValue: defaults.eventSource,
      settings: {
        language: 'javascript',
      },
      editor: SourceCode,
    })
    .addBooleanSwitch({
      path: 'addAllIDs',
      name: 'Add all SVG element IDs',
      description: 'Parse the SVG Document for Elements with IDs assigned and automatically add them to the mapping list.',
      category: ['SVG Mapping'],
      defaultValue: defaults.addAllIDs,
    })
    .addBooleanSwitch({
      path: 'captureMappings',
      name: 'Enable SVG Mapping on Click',
      description: 'When activated, clicking an element in the panel will attempt to map the clicked element or its nearest parent element with an ID assigned.',
      category: ['SVG Mapping'],
      defaultValue: defaults.captureMappings,
    })
    .addCustomEditor({
      id: 'svgMappings',
      path: 'svgMappings',
      name: 'SVG Mappings',
      description: '',
      category: ['SVG Mapping'],
      defaultValue: defaults.svgMappings,
      editor: SvgMappings,
    });
});
