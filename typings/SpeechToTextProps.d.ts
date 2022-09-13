/**
 * This file was generated from SpeechToText.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { DynamicValue, EditableValue } from "mendix";

export interface SpeechToTextContainerProps {
    name: string;
    tabIndex?: number;
    id: string;
    textAttribute: EditableValue<string>;
    isTextArea: boolean;
    isCrossBrowser: boolean;
    APiKey?: DynamicValue<string>;
    requiredMessage?: DynamicValue<string>;
}

export interface SpeechToTextPreviewProps {
    readOnly: boolean;
    textAttribute: string;
    isTextArea: boolean;
    isCrossBrowser: boolean;
    APiKey: string;
    requiredMessage: string;
    onChangeAction: {} | null;
}
