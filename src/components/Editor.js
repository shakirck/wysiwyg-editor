import React, { useEffect, useRef, useState } from "react";
export const Editor = ({ setstate, state }) => {
  const [_editorState, seteditorState] = useState("");
  const [defaultState, setdefaultState] = useState("");
  const defaultValue = useRef(state);
  useEffect(() => {
    readTextFile();
  }, []);
  const readTextFile = async () => {
   const data = ""    
    setdefaultState(data);
    setstate(data);
  };
  const handleEditorInput = (e) => {
    setstate(e.target.innerText);
  };
  const handlePaste = (e) => {
    const inputText = e.clipboardData.getData("Text");
    seteditorState(inputText);
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
