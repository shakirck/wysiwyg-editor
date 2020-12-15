// https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins
import React, { useContext, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { InlineMath, BlockMath } from "react-katex";
import math from "remark-math";
import smartypants from "@silvenon/remark-smartypants";
import "katex/dist/katex.min.css"; // `react-katex` does not import the CSS for you
import { EditorContext, rawDataContext } from "./EditorContext";
import { convertToRaw } from "draft-js";
import { PreviewBlock } from "./PreviewBlock";
export const Preview = () => {
  const [rawData, setrawData] = useContext(rawDataContext);
  useEffect(() => {
    // console.log(rawData, "Preview");
  }, [rawData]);
  // const renderers = {
  //   inlineMath: ({ value }) => <InlineMath math={value} />,
  //   math: ({ value }) => <BlockMath math={value} />,
  // };
  return (
    // <ReactMarkdown
    //   className="preview-container container"
    //   plugins={[gfm, math, plantUml, smartypants]}
    //   renderers={renderers}
    // >
    //   # test
    // </ReactMarkdown>
    <div className="preview-container container">
      {/* {rawData.blocks &&
        rawData.blocks.map((block) => (
          <PreviewBlock block={block} key={block.key} />
        ))} */}
      <PreviewBlock markdown={rawData} />
    </div>
  );
};
