"use client";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Dictaphone() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>{"Browser doesn't support speech recognition"}</span>;
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(transcript);

    if (transcript) {
      alert("Text copied to clipboard");
    }

    if (!transcript) {
      alert("No text to copy..");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-10">
        <h1 className="text-4xl font-bold text-center">
          Speech to Text Converter
        </h1>
        <p className="text-xl w-[600px] text-center mt-7">
          A React hook that converts speech from the microphone to text and
          makes it available to your React components.
        </p>
      </div>

      <p className="mt-7 text-xl font-bold">
        Microphone: {listening ? "on" : "off"}
      </p>
      <div className="flex gap-10">
        <button
          className="border-2 p-2 rounded-lg w-[100px] text-xl mt-5 bg-[#ffff]"
          onClick={SpeechRecognition.startListening}
        >
          Start
        </button>
        <button
          className="border-2 p-2 rounded-lg w-[100px] text-xl mt-5 bg-[#ffff]"
          onClick={SpeechRecognition.stopListening}
        >
          Stop
        </button>
        <button
          className="border-2 p-2 rounded-lg w-[100px] text-xl mt-5 bg-[#ffff]"
          onClick={resetTranscript}
        >
          Reset
        </button>
      </div>
      <div className=" border-2 h-[350px] w-[700px] p-3 mt-5 rounded-lg shadow-xl flex flex-col justify-between items-center bg-[#ffff]">
        <p className="text-xl">{transcript}</p>
        <button
          className="border-2 p-2 w-[200px] rounded-lg text-xl"
          onClick={copyToClipboard}
        >
          Copy To ClipBoard
        </button>
      </div>
    </div>
  );
}

export default Dictaphone;
