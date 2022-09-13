import { Component, ReactNode, Fragment, createElement } from "react";
import { Alert } from "./components/Alert";
import { hot } from "react-hot-loader/root";
import { Speech } from "./components/Speech"
import { SpeechToTextContainerProps } from "../typings/SpeechToTextProps";
import { TextInput } from "./components/TextInput";

import "./ui/SpeechToText.css";
import { TextAreaInput } from "./components/TextAreaInput";

class SpeechToText extends Component<SpeechToTextContainerProps> {
    private readonly onLeaveHandle = this.onLeave.bind(this);
    componentDidMount(): void {
        this.props.textAttribute.setValidator(this.validator.bind(this));
    }
    render(): ReactNode {
        const value = this.props.textAttribute.value || "";
        const validationFeedback = this.props.textAttribute.validation;
        const required = !!(this.props.requiredMessage && this.props.requiredMessage.value);
        if (this.props.isTextArea)
        {
        return <Fragment>
            <div className="custom-speech">
            <TextAreaInput
                id={this.props.id}
                value={value}
                tabIndex={this.props.tabIndex}
                disabled={this.isReadOnly()}
                required={required}
                hasError={!!validationFeedback}
                onLeave={this.onLeaveHandle}
            />
            <Speech name={""} id={this.props.id} textAttribute={this.props.textAttribute} isTextArea={this.props.isTextArea} isCrossBrowser={this.props.isCrossBrowser} APiKey={this.props.APiKey}/>
            </div>
            <Alert id={this.props.id + "-error"}>{validationFeedback}</Alert>
        </Fragment>;
        }
        else{
        return <Fragment>
        <div className="custom-speech">
        <TextInput
            id={this.props.id}
            value={value}
            tabIndex={this.props.tabIndex}
            disabled={this.isReadOnly()}
            onLeave={this.onLeaveHandle}
            required={required}
            hasError={!!validationFeedback}
        />
        <Speech name={""} id={this.props.id} textAttribute={this.props.textAttribute} isTextArea={this.props.isTextArea} isCrossBrowser={this.props.isCrossBrowser} APiKey={this.props.APiKey}/>
        </div>
        <Alert id={this.props.id + "-error"}>{validationFeedback}</Alert>
        </Fragment>;
        }
    }
    

    private isReadOnly(): boolean {
    return this.props.textAttribute.readOnly;
    }
    private onLeave(value: string, isChanged: boolean): void {
        if (!isChanged) {
            return;
        }
        this.props.textAttribute.setValue(value);
    }
    private validator(value: string | undefined): string | undefined {
        const { requiredMessage } = this.props;
        if (requiredMessage && requiredMessage.value && !value) {
            return requiredMessage.value;
        }
        return;
    }
}




export default hot(SpeechToText);
