import React from 'react';
import { PanelOptionsEditorBuilder, GrafanaTheme, FieldConfigEditorProps } from '@grafana/data';
import AceEditor from 'react-ace';
import { config as aceConfig } from 'ace-builds';
aceConfig.set('basePath', 'public/plugins/ace-iot-solutions-aceiot-svg-react/');
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-svg';
import 'ace-builds/src-noconflict/theme-github';

import { css } from 'emotion';
import { config } from '@grafana/runtime';
import { ACESVGOptions, SVGIDMapping } from './types';
import { Input, stylesFactory, Icon, HorizontalGroup, Label, VerticalGroup } from '@grafana/ui';
interface SVGIDMappingProps {
  value: SVGIDMapping;
  index?: number;
  styles: any;
  onChange?: (a: SVGIDMapping, b: number) => void;
  onAdd?: (a: SVGIDMapping) => void;
  onDelete?: (a: number) => void;
}

class SvgMapping extends React.PureComponent<SVGIDMappingProps> {
  constructor(props: SVGIDMappingProps) {
    super(props)
    this.state = {...props.value}
  }
  render() {
    const { value, index, onChange, onAdd, onDelete } = this.props;
    return (
      <HorizontalGroup>
        {!value.svgId && onAdd && <Icon className={this.props.styles.addIcon} name="plus-circle" onClick={() => {onAdd(this.state as SVGIDMapping)}} />}
        <Label>SVG ID</Label>
        <Input
          type="text"
          name="svgId"
          defaultValue={value.svgId}
          onBlur={e => {
            const svgId = e.currentTarget.value;
            this.setState({svgId: svgId})
            onChange  && index && onChange({ ...value, svgId: svgId }, index)}
          }
        />
        <Label>Mapped Name</Label>
        <Input
          type="text"
          name="mappedName"
          defaultValue={value.mappedName}
          onBlur={e => {
            const mappedName = e.currentTarget.value;
            this.setState({mappedName: mappedName})
            onChange && index && onChange({ ...value, mappedName: mappedName }, index)}
          }
        />
        {value.svgId && onDelete && (index !== undefined) && <Icon
          className={this.props.styles.trashIcon}
          name="trash-alt"
          onClick={() => {onDelete(index)
          }}
        />}
      </HorizontalGroup>
    );
  }
}

class SvgMappings extends React.PureComponent<FieldConfigEditorProps<Array<SVGIDMapping>, any>> {
  onChange = (updatedMapping: SVGIDMapping, index: number) => {
    let newMappings = [...this.props.value];
    newMappings[index] = updatedMapping;
    this.props.onChange(newMappings);
  };
  onAdd = (newMapping: SVGIDMapping) => {
    let newMappings = [...this.props.value, newMapping]
    this.props.onChange(newMappings);
  }
  onDelete = (index: number) => {
    let newMappings = [...this.props.value]
    newMappings.splice(index, 1)
    this.props.onChange(newMappings)
  }
  render() {
    const styles = getStyles(config.theme);
    return (
      <VerticalGroup>
        <SvgMapping value={{svgId: '', mappedName: ''}} styles={styles} onAdd={this.onAdd}/>
        {this.props.value.map((currentMapping: SVGIDMapping, index: number) => {
          return (
            <SvgMapping
              key={currentMapping.svgId}
              value={currentMapping}
              index={index}
              onChange={this.onChange}
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
        return (
          <AceEditor
            mode="svg"
            theme="github"
            onChange={(newValue: any) => {
              props.onChange(newValue);
              props.value = newValue;
            }}
            value={props.value}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
            }}
            name="initSource"
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
        return (
          <AceEditor
            mode="javascript"
            theme="github"
            onChange={(newValue: string) => {
              props.onChange(newValue);
              props.value = newValue;
            }}
            value={props.value}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
            }}
            name="eventSource"
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
        return (
          <AceEditor
            mode="javascript"
            theme="github"
            onChange={(newValue: string) => {
              props.onChange(newValue);
              props.value = newValue;

            }}
            value={props.value}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
            }}
            name="initSource"
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
