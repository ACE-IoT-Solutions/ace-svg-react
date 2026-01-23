import React from 'react';
import { Button } from '@grafana/ui';
import { BusEventBase, IconName, StandardEditorProps } from '@grafana/data';
import { getAppEvents } from '@grafana/runtime';

/**
 * Settings for the action button.
 */
export interface ActionButtonSettings {
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
    /**
     * The name of the event to emit.
     */
    readonly event: string;
}
/**
 * The editor properties for the action button.
 */
type ActionButtonProps = StandardEditorProps<void, ActionButtonSettings>;
/**
 * The action button functional component.
 */
export const ActionButton: React.FC<ActionButtonProps> = (props) => <Button aria-label={props.item.settings?.text} icon={props.item.settings?.icon} tooltip={props.item.settings?.tooltip} onClick={() => getAppEvents().publish(new ActionButtonEvent(props.item.settings?.event ?? 'action-button'))} >{props.item.settings?.text}</Button>;
/**
 * The action button event.
 */
export class ActionButtonEvent extends BusEventBase {
    public static readonly type = 'action-button-event';
    constructor(public readonly name: string) {
        super();
    }
}
