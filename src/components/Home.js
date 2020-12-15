import React, { useState } from "react";
import { DraftEditor } from "./DraftEditor";
import { Preview } from "./Preview";
export const Home = () => {
  return (
    <div className="Home">
      <DraftEditor />
      <Preview />
    </div>
  );
};
