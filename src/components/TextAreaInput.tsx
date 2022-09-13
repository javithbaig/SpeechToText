import { CSSProperties, Component, ReactNode, createElement } from "react";
import classNames from "classnames";

export interface InputAreaProps {
    id?: string;
    value: string;
    className?: string;
    index?: number;
    style?: CSSProperties;
    tabIndex?: number;
    hasError?: boolean;
    required?: boolean;
    disabled?: boolean;
    onLeave?: (value: string, changed: boolean) => void;
}

interface InputState {
    editedValue?: string;
}

export class TextAreaInput extends Component<InputAreaProps, InputState> {
    private readonly onChangeHandle = this.onChange.bind(this);
    private readonly onBlurHandle = this.onBlur.bind(this);
    readonly state: InputState = { editedValue: undefined };
    componentDidUpdate(prevProps: InputAreaProps): void {
        if (this.props.value !== prevProps.value) {
            this.setState({ editedValue: undefined });
        }
    }
    render(): ReactNode {
        const className = classNames("form-control custom-speech-input", this.props.className);
        const labelledby = `${this.props.id}-label` 
            + (this.props.hasError ? ` ${this.props.id}-error` : "");
        return <textarea
            id={this.props.id}
            className={className}
            style={this.props.style}
            value={this.getCurrentValue()}
            tabIndex={this.props.tabIndex}
            onChange={this.onChangeHandle}
            disabled={this.props.disabled}
            onBlur={this.onBlurHandle}
            aria-labelledby={labelledby}
            aria-invalid={this.props.hasError}
            aria-required={this.props.required}
        />;
    }
    
    private getCurrentValue(): string {
        return this.state.editedValue !== undefined
            ? this.state.editedValue
            : this.props.value;
    }
    private onChange(event: { target: { value: any; }; }): void {
        this.setState({ editedValue: event.target.value });
        console.log(this.state.editedValue);
    }
    private onBlur(): void {
        const inputValue = this.props.value;
        const currentValue = this.getCurrentValue();
        if (this.props.onLeave) {
            this.props.onLeave(currentValue, currentValue !== inputValue);
        }
        this.setState({ editedValue: undefined });
    }
}
