import React, { PureComponent } from 'react';

import Editor from '@monaco-editor/react';

interface MonacoEditorProps {
  value: string;
  theme: string;
  language: string;
  onChange: (value?: string | undefined) => void;
}

export class MonacoEditor extends PureComponent<MonacoEditorProps> {
  getEditorValue?: any;
  editorInstance?: any;

  onSourceChange = () => {
    this.props.onChange(this.getEditorValue());
  };
  onEditorDidMount = (getEditorValue: any, editorInstance: any) => {
    this.getEditorValue = getEditorValue;
    this.editorInstance = editorInstance;
  };
  updateDimensions() {
    this.editorInstance.layout();
  }
  render() {
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
          editorDidMount={this.onEditorDidMount}
        />
      </div>
    );
  }
}
