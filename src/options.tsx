import React from 'react';
import { PanelOptionsEditorBuilder, GrafanaTheme, dateTime } from '@grafana/data';
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
// import { config } from 'ace-builds';

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
            onChange={(newValue: any) => {
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
      defaultValue: '',
      editor: props => {
        const updateMapping = (svgMapping: SVGIDMapping, index: number) => {
          let updatedMappings = props.value;
          updatedMappings[index] = svgMapping;
          props.onChange(updatedMappings);
        }
        const styles = getStyles(config.theme);
        const svgMappingComponent = (svgMapping: SVGIDMapping, index: number) => {
          let addIcon: React.ReactNode = (svgMapping.svgId === '') ? (
              <Icon className={styles.addIcon}
              name="plus-circle"
              onClick={() => {
                props.value.push(svgMapping);
                props.onChange(props.value)
              }}
              />) : null;
          return (
            <HorizontalGroup key={svgMapping.svgId}>
              {addIcon}
              <Label>SVG ID</Label>
              <Input type="text" value={svgMapping.svgId} onBlur={(e) => {
                svgMapping.svgId = e.currentTarget.value;
                console.log(svgMapping)
                updateMapping(svgMapping, index)
              }} />
              <Label>Mapped Name</Label>
              <Input type="text" value={svgMapping.mappedName} onChange={(e) => {
                updateMapping(svgMapping, index)
              }} />
              <Icon
                className={styles.trashIcon}
                name="trash-alt"
                onClick={() => {
                  props.onChange(
                    props.value.filter((existingMapping: SVGIDMapping) => existingMapping.svgId !== svgMapping.svgId)
                  );
                }}
              />
            </HorizontalGroup>
          );
        }

        const svgMappings = props.value.map((svgMapping: SVGIDMapping, index: number) => {
          return svgMappingComponent(svgMapping, index)
        });

        return (<VerticalGroup>
          {svgMappingComponent({svgId: "", mappedName: ""}, -1)}
          {svgMappings}
          </VerticalGroup>);
      },
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
