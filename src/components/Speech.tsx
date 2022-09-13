import { ReactElement, createElement, useEffect } from "react";
import useSpeechToText from 'react-hook-speech-to-text';
import { SpeechToTextContainerProps } from "typings/SpeechToTextProps";
import { MicFill } from 'react-bootstrap-icons';
import { MicMuteFill } from 'react-bootstrap-icons';
import "../ui/SpeechToText.css"

export function Speech(props: SpeechToTextContainerProps): ReactElement {
    //const { textAttribute } = props;
    let inputtext = props.textAttribute.value || "";
    //const [input, setInput] = useState();
    const {
        error,
        //interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText
  } = useSpeechToText({
    continuous: true,
    crossBrowser: props.isCrossBrowser,
    googleApiKey: props.APiKey?.value,
    speechRecognitionProperties: { interimResults: true },
    useLegacyResults: false
  });

      useEffect(() => {
        if (results) {
          if( inputtext == "" )
          results.map((result) => (props.textAttribute.setValue(inputtext+result.transcript)))
          else
          results.map((result) => (props.textAttribute.setValue(inputtext+" "+result.transcript)))
        }
        return () => {};
      }, [results]);

      //if (error) console.log("Web Speech API is not available in this browser");
      if (error) return <i>‍</i>;

    return (
        <div>
          <button className="custom-speech-botton" id={props.id} onClick={isRecording ? stopSpeechToText : startSpeechToText}>
          {isRecording ? <MicFill /> : <MicMuteFill />}
          </button>
          {isRecording ? "Listening..." : ""}
        </div>
      );
}



