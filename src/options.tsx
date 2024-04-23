import React from 'react';
import { PanelOptionsEditorBuilder, PanelOptionsEditorProps } from '@grafana/data';
import Editor from '@monaco-editor/react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

import { config } from '@grafana/runtime';
import { ACESVGOptions, SVGIDMapping } from './types';
import { props_defaults } from 'examples';
import { Button, HorizontalGroup, Input, Label, Tooltip, VerticalGroup } from '@grafana/ui';

interface MonacoEditorProps {
  readonly value: string;
  readonly theme: string;
  readonly language: string;
  readonly onChange: (value?: string | undefined) => void;
}

class MonacoEditor extends React.PureComponent<MonacoEditorProps> {
  private editorInstance?: monaco.editor.IStandaloneCodeEditor;

  private onSourceChange(): void {
    if (typeof this.editorInstance !== 'undefined') {
      this.props.onChange(this.editorInstance.getValue());
    }
  }

  private onEditorDidMount(editor: monaco.editor.IStandaloneCodeEditor): void {
    this.editorInstance = editor;
  }

  public render(): React.JSX.Element {
    const source = this.props.value;
    if (this.editorInstance) {
      this.editorInstance.layout();
    }
    return (
      <div onBlur={this.onSourceChange}>
        <Editor
          height={'33vh'}
          language={this.props.language}
          theme={this.props.theme}
          value={source}
          onMount={this.onEditorDidMount}
        />
      </div>
    );
  }
}

interface SVGIDMappingProps {
  readonly value: SVGIDMapping;
  readonly index?: number;
  readonly onChangeItem?: (a: SVGIDMapping, b: number) => void | undefined;
  readonly onAdd?: (a: SVGIDMapping) => void;
  readonly onDelete?: (a: number) => void;
}

class SvgMapping extends React.PureComponent<SVGIDMappingProps> {
  constructor(props: SVGIDMappingProps) {
    super(props);
    this.state = { ...props.value };
  }

  public render(): React.JSX.Element {
    const { value, index, onChangeItem, onAdd, onDelete } = this.props;
    return (
      <HorizontalGroup>
        <Label>SVG ID</Label>
        <Input
          type="text"
          name="svgId"
          defaultValue={value.svgId}
          // css={config.theme}
          onBlur={(e) => {
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
          // css={config.theme}
          onBlur={(e) => {
            const mappedName = e.currentTarget.value;
            this.setState({ mappedName: mappedName });
            onChangeItem && index && onChangeItem({ ...value, mappedName: mappedName }, index);
          }}
        />
        {value.svgId && onDelete && index !== undefined && (
          <Tooltip content="Delete this mapping" theme={'info'}>
            <Button
              variant="destructive"
              icon="trash-alt"
              size="sm"
              onClick={() => {
                onDelete(index);
              }}
            >
              Remove
            </Button>
          </Tooltip>
        )}
        {!value.svgId && onAdd && (
          <Tooltip content="Add a new SVG Element ID to svgmap property mapping manually" theme={'info'}>
            <Button
              variant="secondary"
              size="sm"
              icon="plus-circle"
              onClick={() => {
                onAdd(this.state as SVGIDMapping);
              }}
            >
              Add
            </Button>
          </Tooltip>
        )}
      </HorizontalGroup>
    );
  }
}

class SvgMappings extends React.PureComponent<PanelOptionsEditorProps<SVGIDMapping[]>> {
  private onChangeItem(updatedMapping: SVGIDMapping, index: number): void {
    const newMappings = [...this.props.value];
    newMappings[index] = updatedMapping;
    this.props.onChange(newMappings);
  }

  private onAdd(newMapping: SVGIDMapping): void {
    if (newMapping.svgId !== '') {
      const newMappings = [...this.props.value, newMapping];
      this.props.onChange(newMappings);
    }
  }

  private onDelete(index: number): void {
    const newMappings = [...this.props.value];
    newMappings.splice(index, 1);
    this.props.onChange(newMappings);
  }

  public render(): React.JSX.Element {
    const svgMappings = this.props.value;
    return (
      <VerticalGroup>
        <HorizontalGroup>
          <Tooltip content="Clear all SVG Element ID to svgmap property mappings" theme="info">
            <Button
              variant="destructive"
              icon="trash-alt"
              size="sm"
              onClick={() => {
                this.props.onChange([]);
              }}
            >
              Clear All
            </Button>
          </Tooltip>
          <SvgMapping value={{ svgId: '', mappedName: '' }} onAdd={this.onAdd} />
        </HorizontalGroup>
        {svgMappings.map((currentMapping: SVGIDMapping, index: number) => {
          return (
            <SvgMapping
              key={currentMapping.svgId}
              value={currentMapping}
              index={index}
              onChangeItem={this.onChangeItem}
              onDelete={this.onDelete}
            />
          );
        })}
      </VerticalGroup>
    );
  }
}

export function optionsBuilder(builder: PanelOptionsEditorBuilder<ACESVGOptions>): PanelOptionsEditorBuilder<ACESVGOptions> {
  return builder
    .addBooleanSwitch({
      category: ['SVG Document'],
      path: 'svgAutoComplete',
      name: 'Enable SVG AutoComplete',
      description: 'Enable editor autocompletion, optional as it can be buggy on large documents',
    })
    .addCustomEditor({
      category: ['SVG Document'],
      path: 'svgSource',
      name: 'SVG Document',
      description: `Editor for SVG Document, while small tweaks can be made here, we recommend using a dedicated
        Graphical SVG Editor and simply pasting the resulting XML here`,
      id: 'svgSource',
      defaultValue: props_defaults.svgNode,
      editor: function editor(props) {
        return (
          <MonacoEditor
            language="xml"
            theme={config.theme2.isLight ? 'vs-light' : 'vs-dark'}
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
      description: 'Enable editor autocompletion, optional as it can be buggy on large documents',
      defaultValue: true,
    })
    .addCustomEditor({
      category: ['User JS Render'],
      path: 'eventSource',
      name: 'User JS Render Code',
      description: `The User JS Render code is executed whenever new data is available, the root svg document is available as 'svgnode',
        and elements you've mapped using the SVG Mapping tools below are available as properties on the 'svgmap' object.
        The Grafana DataFrame is provided as 'data' and the 'options' object can be used to pass values and references between
        the Render context and the Init context`,
      id: 'eventSource',
      defaultValue: props_defaults.eventSource,
      editor: function editor(props) {
        return (
          <MonacoEditor
            language="javascript"
            theme={config.theme2.isLight ? 'vs-light' : 'vs-dark'}
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
      description: 'Enable editor autocompletion, optional as it can be buggy on large documents',
      defaultValue: true,
    })
    .addCustomEditor({
      category: ['User JS Init'],
      path: 'initSource',
      name: 'User JS Init Code',
      description: `The User JS Init code is executed once when the panel loads, you can use this to define helper functions that
        you later reference in the User JS Render code section. The sections have identical execution contexts, and any
        JS objects you want to reference between them will need to be attached to the options object as properties`,
      id: 'initSource',
      defaultValue: props_defaults.initSource,
      editor: function editor(props) {
        return (
          <MonacoEditor
            language="javascript"
            theme={config.theme2.isLight ? 'vs-light' : 'vs-dark'}
            value={props.value}
            onChange={props.onChange}
          />
        );
      },
    })
    .addBooleanSwitch({
      category: ['SVG Mapping'],
      path: 'addAllIDs',
      name: 'Add all SVG Element IDs',
      description:
        'Parse the SVG Document for Elements with IDs assigned and automatically add them to the mapping list',
      defaultValue: false,
    })
    .addBooleanSwitch({
      category: ['SVG Mapping'],
      path: 'captureMappings',
      name: 'Enable SVG Mapping on Click',
      description:
        'When activated, clicking an element in the panel will attempt to map the clicked element or its nearest parent element with an ID assigned',
      defaultValue: false,
    })
    .addCustomEditor({
      category: ['SVG Mapping'],
      id: 'svgMappings',
      path: 'svgMappings',
      name: 'SVG Mappings',
      description:
        'The SVG ID should match an element in the SVG document with an existing ID tag, the element will be attached to the "svgmap" object in the user code execution contexts as a property using the Mapped Name provided below',
      defaultValue: props_defaults.svgMappings,
      editor: SvgMappings,
    });
}
