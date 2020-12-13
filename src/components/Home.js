import React, { useState } from "react";
import { Editor } from "./Editor";
import { Preview } from "./Preview";

export const Home = () => {
  const [state, setstate] = useState("");

  return (
    <div className="Home">
      <Editor state={state} setstate={setstate} />
      <Preview state={state} setstate={setstate} />
    </div>
  );
};
