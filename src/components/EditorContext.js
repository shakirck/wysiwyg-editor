import React, { createContext, useState } from "react";
import { Editor, EditorState } from "draft-js";
export const EditorContext = createContext("");
export const rawDataContext = createContext("");
export const EditorContextProvider = ({ children }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [rawData, setrawData] = useState({});
  return (
    <EditorContext.Provider value={[editorState, setEditorState]}>
      <rawDataContext.Provider value={[rawData, setrawData]}>
        {children}
      </rawDataContext.Provider>
    </EditorContext.Provider>
  );
};
