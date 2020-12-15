import React, { useContext, useEffect } from "react";
import { convertToRaw, Editor } from "draft-js";
import "draft-js/dist/Draft.css";
import { EditorContext, rawDataContext } from "./EditorContext";

export const DraftEditor = () => {
  const [editorState, setEditorState] = useContext(EditorContext);
  const [rawData, setrawData] = useContext(rawDataContext);
  useEffect(() => {
    console.log("render");
    // console.log(rawData, "editor");
  }, [editorState]);
  const handleChange = (editorState) => {
    setEditorState(editorState);
    const contentState = editorState.getCurrentContent();
    const rawData = convertToRaw(contentState);
    setrawData(rawData);
  };
  return (
    <div className="editor-container">
      <Editor editorState={editorState} onChange={handleChange} />
    </div>
  );
};
