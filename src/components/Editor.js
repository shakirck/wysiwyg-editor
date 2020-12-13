import React, { useEffect, useRef, useState } from "react";
import { text } from "react-markdown/lib/renderers";

export const Editor = ({ setstate, state }) => {
  const [editorState, seteditorState] = useState("");

  const defaultValue = useRef(state);
  useEffect(() => {
    console.log("render");
  }, [state]);
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
    <div
      className="editor-container container"
      contentEditable={true}
      onInput={(e) => handleEditorInput(e)}
      suppressContentEditableWarning
      spellCheck={false}
      onPaste={(e) => {
        handlePaste(e);
      }}
      defaultValue={defaultValue}
    ></div>
  );
};
