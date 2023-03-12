import  { useEffect, useRef, useState } from "react";
 
export const Editor = ({ setstate, state }) => {
  const [, seteditorState] = useState("");
  const [defaultState, setdefaultState] = useState("");
  const defaultValue = useRef(state);
 
  const handleEditorInput = (e) => {
    setstate(e.target.innerText);
  };
  const handlePaste = (e) => {
    const inputText = e.clipboardData.getData("Text");
    seteditorState(inputText);
  };
  useEffect(() => {

    setdefaultState(state);
    defaultValue.current = state;
    console.log("defaultValue.current", defaultValue.current)

  }, [state]);

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
      {""}
    </pre>
  );
};

