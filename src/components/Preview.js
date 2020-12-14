// https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins
import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { InlineMath, BlockMath } from "react-katex";
import math from "remark-math";
import mermaid from "remark-mermaid";
import breaks from "remark-breaks";
import smartypants from "@silvenon/remark-smartypants";
import plantUml from "@akebifiky/remark-simple-plantuml";
import "katex/dist/katex.min.css"; // `react-katex` does not import the CSS for you
export const Preview = ({ state, setstate }) => {
  const renderers = {
    inlineMath: ({ value }) => <InlineMath math={value} />,
    math: ({ value }) => <BlockMath math={value} />,
  };

  return (
    <ReactMarkdown
      className="preview-container container"
      plugins={[gfm, math, mermaid, breaks, plantUml, smartypants]}
      renderers={renderers}
    >
      {state}
    </ReactMarkdown>
  );
};
