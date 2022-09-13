import { Component, createElement, ReactNode } from "react";
import { SpeechToTextPreviewProps } from "../typings/SpeechToTextProps";
import { TextInput } from "./components/TextInput";

declare function require(name: string): string;

export class preview extends Component<SpeechToTextPreviewProps> {
    render(): ReactNode {
        const value = `[${this.props.textAttribute}]`;
        return <TextInput value={value} />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/SpeechToText.css");
}
