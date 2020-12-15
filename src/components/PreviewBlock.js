import React from "react";
import marked from "marked";
export const PreviewBlock = ({ block }) => {
  const getMarkup = () => {
    const markup = marked(block.text, { sanitize: true });
    return { __html: markup };
  };

  return <div dangerouslySetInnerHTML={getMarkup()}></div>;
};
