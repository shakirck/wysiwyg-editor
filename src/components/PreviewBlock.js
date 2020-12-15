import React from "react";
import marked from "marked";
import showdown from "showdown";
// showdown.setFlavor("github");
export const PreviewBlock = ({ markdown }) => {
  const showdownOption = {
    parseImgDimensions: true,
    simplifiedAutoLink: true,
    tables: true,
    tasklists: true,
    smoothLivePreview: true,
    smartIndentationFix: true,
    openLinksInNewWindow: true,
    emoji: true,
    prefixHeaderId: true,
    ghCodeBlocks: true,
    disableForced4SpacesIndentedSublists: true,
  };
  const getMarkup = () => {
    // const markup = marked(block.text, { sanitize: true });
    const converter = new showdown.Converter(showdownOption);
    var thisConverterSpecificOptions = converter.getOptions();
    console.log("options ", thisConverterSpecificOptions);
    // console.log(markdown, "markdown");
    // debugger;
    const markup = converter.makeHtml(markdown);
    return { __html: markup };
  };

  return <div dangerouslySetInnerHTML={getMarkup()}></div>;
};
