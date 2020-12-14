import React, { useEffect, useRef, useState } from "react";
import templateMD from "../utils/dilinger.md";
export const Editor = ({ setstate, state }) => {
  const [editorState, seteditorState] = useState("");
  const [defaultState, setdefaultState] = useState("");
  const defaultValue = useRef(state);
  useEffect(() => {
    readTextFile();
  }, []);
  const readTextFile = async () => {
    const res = await fetch(templateMD);
    const data = await res.text();
    console.log(data);
    setdefaultState(data);
    setstate(data);
  };
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
