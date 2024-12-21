import React from 'react';
import { StandardEditorProps } from '@grafana/data';
import { CodeEditor } from '@grafana/ui';

/**
 * Settings for the source code editor.
 */
export interface SourceCodeSettings {
    /**
     * The language for syntax highlighting.
     */
    readonly language: string;
};

/**
 * The properties object structure for the source code editor.
 */
type SourceCodeProps = StandardEditorProps<string, SourceCodeSettings>;

/**
 * Defines the source code editor as a React functional component.
 */
export const SourceCode: React.FC<SourceCodeProps> = (props) => <CodeEditor value={props.value} language={props.item.settings?.language ?? ''} onBlur={props.onChange} height={'20rem'} showLineNumbers={true} showMiniMap={true} monacoOptions={{ scrollbar: { alwaysConsumeMouseWheel: true } }} />;
