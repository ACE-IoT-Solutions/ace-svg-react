import React from 'react';
import { Button } from '@grafana/ui';
import { IconName, StandardEditorProps } from '@grafana/data';

/**
 * Settings for the action button.
 */
export interface ActionButtonSettings {
    /**
     * The callback function for the action button.
     */
    readonly callback: Function;
    /**
     * The text shown inside the button.
     */
    readonly text: string;
    /**
     * The icon shown inside the button.
     */
    readonly icon: IconName;
    /**
     * Text to show when hovering over this button.
     */
    readonly tooltip: string;
}
/**
 * The editor properties for the action button.
 */
type ActionButtonProps = StandardEditorProps<void, ActionButtonSettings>;
/**
 * The action button functional component.
 */
export const ActionButton: React.FC<ActionButtonProps> = (props) => <Button aria-label={props.item.settings?.text} icon={props.item.settings?.icon} tooltip={props.item.settings?.tooltip} onClick={() => props.item.settings?.callback()} >{props.item.settings?.text}</Button>;
