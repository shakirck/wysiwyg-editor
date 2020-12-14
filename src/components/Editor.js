import React, { useEffect, useRef, useState } from "react";
import { text } from "react-markdown/lib/renderers";
import templateMD from "../utils/dilinger.md";

export const Editor = ({ setstate, state }) => {
  const [editorState, seteditorState] = useState("");
  const [defaultState, setdefaultState] = useState("");
  const defaultValue = useRef(state);
  useEffect(() => {
    const readTextFile = (file) => {
      var rawFile = new XMLHttpRequest();
      rawFile.open("GET", file);
      rawFile.onreadystatechange = () => {
        if (rawFile.readyState === 4) {
          if (rawFile.status === 200 || rawFile.status == 0) {
            var allText = rawFile.responseText;
            console.log(allText);
            setdefaultState(allText);
            setstate(allText);
          }
        }
      };
      rawFile.send(null);
    };
    console.log(templateMD);
    const data = readTextFile(templateMD);
  }, []);
  const handleEditorInput = (e) => {
    setstate(e.target.innerText);
  };
  const handlePaste = (e) => {
    // e.preventDefault();
    // console.log(e.clipboardData.getData("Text"));
    const inputText = e.clipboardData.getData("Text");
    seteditorState(inputText);
    // console.log(textarr);
  };
  const handleTextSplitting = () => {
    const textarr = editorState.split("\n");
    setstate(textarr);
  };
  return (
    <pre
      className="editor-container container"
      contentEditable={true}
      onInput={(e) => handleEditorInput(e)}
      suppressContentEditableWarning
      spellCheck={false}
      onPaste={(e) => {
        handlePaste(e);
      }}
      defaultValue={defaultValue}
    >
      {defaultState}
    </pre>
  );
};
