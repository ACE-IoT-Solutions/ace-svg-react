import React from 'react';
import {
  PanelOptionsEditorBuilder,
  GrafanaTheme,
  PanelOptionsEditorProps,
  // FieldConfigEditorProps,
  // StringFieldConfigSettings,
  // PanelOptionsEditorProps,
  // PanelOptionsEditorItem,
} from '@grafana/data';
import Editor from '@monaco-editor/react';
// import AceEditor from 'react-ace';
// import { config as aceConfig } from 'ace-builds';
// aceConfig.set('basePath', 'public/plugins/ace-iot-solutions-aceiot-svg-react/');
// import 'ace-builds/src-noconflict/mode-javascript';
// import 'ace-builds/src-noconflict/mode-svg';
// import 'ace-builds/src-noconflict/theme-github';

import { css } from 'emotion';
import { config } from '@grafana/runtime';
import { ACESVGOptions, SVGIDMapping } from './types';
// import { Input, stylesFactory, Icon, HorizontalGroup, Label, VerticalGroup, useTheme } from '@grafana/ui';
import { Input, stylesFactory, Icon, HorizontalGroup, Label, VerticalGroup } from '@grafana/ui';

interface MonacoEditorProps {
  value: string;
  theme: string;
  language: string;
  onChange: (value?: string | undefined) => void;
}
class MonacoEditor extends React.PureComponent<MonacoEditorProps> {
  getEditorValue: any | undefined;
  editorInstance: any | undefined;

  onSourceChange = () => {
    this.props.onChange(this.getEditorValue());
  };
  onEditorDidMount = (getEditorValue: any, editorInstance: any) => {
    this.getEditorValue = getEditorValue;
    this.editorInstance = editorInstance;
  };
  render() {
    const source = this.props.value;
    return (
      <div onBlur={this.onSourceChange}>
        <Editor
          height={'33vh'}
          language={this.props.language}
          theme={this.props.theme}
          value={source}
          editorDidMount={this.onEditorDidMount}
        />
      </div>
    );
  }
}

interface SVGIDMappingProps {
  value: SVGIDMapping;
  index?: number;
  styles?: any;
  onChangeItem?: (a: SVGIDMapping, b: number) => void | undefined;
  onAdd?: (a: SVGIDMapping) => void;
  onDelete?: (a: number) => void;
}

class SvgMapping extends React.PureComponent<SVGIDMappingProps> {
  constructor(props: SVGIDMappingProps) {
    super(props);
    this.state = { ...props.value };
  }
  render() {
    const { value, index, onChangeItem, onAdd, onDelete } = this.props;
    return (
      <HorizontalGroup>
        {!value.svgId && onAdd && (
          <Icon
            className={this.props.styles.addIcon}
            name="plus-circle"
            onClick={() => {
              onAdd(this.state as SVGIDMapping);
            }}
          />
        )}
        <Label>SVG ID</Label>
        <Input
          type="text"
          name="svgId"
          defaultValue={value.svgId}
          onBlur={e => {
            const svgId = e.currentTarget.value;
            this.setState({ svgId: svgId });
            onChangeItem && index && onChangeItem({ ...value, svgId: svgId }, index);
          }}
        />
        <Label>Mapped Name</Label>
        <Input
          type="text"
          name="mappedName"
          defaultValue={value.mappedName}
          onBlur={e => {
            const mappedName = e.currentTarget.value;
            this.setState({ mappedName: mappedName });
            onChangeItem && index && onChangeItem({ ...value, mappedName: mappedName }, index);
          }}
        />
        {value.svgId && onDelete && index !== undefined && (
          <Icon
            className={this.props.styles.trashIcon}
            name="trash-alt"
            onClick={() => {
              onDelete(index);
            }}
          />
        )}
      </HorizontalGroup>
    );
  }
}

// interface SVGIDMappingsProps {
//   value: SVGIDMapping[];
//   index?: number;
//   styles?: any;
//   // onChange: (a: SVGIDMapping[]) => void | undefined;
//   onChangeItem?: (a: SVGIDMapping, b: number) => void | undefined;
//   onAdd?: (a: SVGIDMapping) => void;
//   onDelete?: (a: number) => void;
// }

class SvgMappings extends React.PureComponent<PanelOptionsEditorProps<SVGIDMapping[]>> {
  onChangeItem = (updatedMapping: SVGIDMapping, index: number) => {
    let newMappings = [...this.props.value];
    newMappings[index] = updatedMapping;
    this.props.onChange(newMappings);
  };
  onAdd = (newMapping: SVGIDMapping) => {
    let newMappings = [...this.props.value, newMapping];
    this.props.onChange(newMappings);
  };
  onDelete = (index: number) => {
    let newMappings = [...this.props.value];
    newMappings.splice(index, 1);
    this.props.onChange(newMappings);
  };
  render() {
    const styles = getStyles(config.theme);
    return (
      <VerticalGroup>
        <SvgMapping value={{ svgId: '', mappedName: '' }} styles={styles} onAdd={this.onAdd} />
        {this.props.value.map((currentMapping: SVGIDMapping, index: number) => {
          return (
            <SvgMapping
              key={currentMapping.svgId}
              value={currentMapping}
              index={index}
              onChangeItem={this.onChangeItem}
              onDelete={this.onDelete}
              styles={styles}
            />
          );
        })}
      </VerticalGroup>
    );
  }
}
// editor: props => {
//   const updateMapping = (svgMapping: SVGIDMapping, index: number) => {
//     let updatedMappings = props.value;
//     updatedMappings[index] = svgMapping;
//     props.value = updatedMappings;
//     props.onChange(props.value);
//   }
//   const svgMappingComponent = (svgMapping: SVGIDMapping, index: number) => {
//     let addIcon: React.ReactNode = (svgMapping.svgId === '') ? (
//         <Icon className={styles.addIcon}
//         name="plus-circle"
//         onClick={() => {
//           props.value.push(svgMapping);
//           props.onChange(props.value)
//         }}
//         />) : null;
//   }

//   const svgMappings = props.value.map((svgMapping: SVGIDMapping, index: number) => {
//     return svgMappingComponent(svgMapping, index)
//   });

//   return (<VerticalGroup>
//     {svgMappingComponent({svgId: "", mappedName: ""}, -1)}
//     {svgMappings}
//     </VerticalGroup>);
// },

export const optionsBuilder = (builder: PanelOptionsEditorBuilder<ACESVGOptions>) => {
  return builder
    .addBooleanSwitch({
      category: ['SVG Document'],
      path: 'svgAutoComplete',
      name: 'Enable SVG AutoComplete',
    })
    .addCustomEditor({
      category: ['SVG Document'],
      path: 'svgSource',
      name: 'SVG Document',
      id: 'svgSource',
      editor: props => {
        const grafanaTheme = config.theme.name;
        return (
          <MonacoEditor
            language="xml"
            theme={grafanaTheme === 'Grafana Light' ? 'vs-light' : 'vs-dark'}
            value={props.value}
            onChange={props.onChange}
          />
        );
      },
    })
    .addBooleanSwitch({
      category: ['User JS Render'],
      path: 'eventAutoComplete',
      name: 'Enable Render JS AutoComplete',
      defaultValue: true,
    })
    .addCustomEditor({
      category: ['User JS Render'],
      path: 'eventSource',
      name: 'User JS Render Code',
      id: 'eventSource',
      editor: props => {
        const grafanaTheme = config.theme.name;
        return (
          <MonacoEditor
            language="javascript"
            theme={grafanaTheme === 'Grafana Light' ? 'vs-light' : 'vs-dark'}
            value={props.value}
            onChange={props.onChange}
          />
        );
      },
    })
    .addBooleanSwitch({
      category: ['User JS Init'],
      path: 'initAutoComplete',
      name: 'Enable Init JS AutoComplete',
      defaultValue: true,
    })
    .addCustomEditor({
      category: ['User JS Init'],
      path: 'initSource',
      name: 'User JS Init Code',
      id: 'initSource',
      editor: props => {
        const grafanaTheme = config.theme.name;
        return (
          <MonacoEditor
            language="javascript"
            theme={grafanaTheme === 'Grafana Light' ? 'vs-light' : 'vs-dark'}
            value={props.value}
            onChange={props.onChange}
          />
        );
      },
    })
    .addBooleanSwitch({
      category: ['SVG Mapping'],
      path: 'captureMappings',
      name: 'Enable SVG Mapping on Click',
      defaultValue: false,
    })
    .addCustomEditor({
      category: ['SVG Mapping'],
      id: 'svgMappings',
      path: 'svgMappings',
      name: 'SVG Mappings',
      defaultValue: [],
      editor: SvgMappings,
    });
};

const getStyles = stylesFactory((theme: GrafanaTheme) => {
  return {
    colorPicker: css`
      padding: 0 ${theme.spacing.sm};
    `,
    inputPrefix: css`
      display: flex;
      align-items: center;
    `,
    trashIcon: css`
      color: ${theme.colors.textWeak};
      cursor: pointer;
      //
      &:hover {
        color: ${theme.colors.text};
      }
    `,
    addIcon: css`
      color: ${theme.colors.textWeak};
      cursor: pointer;
      //
      &:hover {
        color: ${theme.colors.text};
      }
    `,
  };
});
//
