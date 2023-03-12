// https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins
import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { InlineMath, BlockMath } from "react-katex";
import math from "remark-math";
import smartypants from "@silvenon/remark-smartypants";
import plantUml from "@akebifiky/remark-simple-plantuml";
import "katex/dist/katex.min.css"; // `react-katex` does not import the CSS for you
export const Preview = ({ state, setstate }) => {
  const components = {
    inlineMath: ({ value }) => <InlineMath math={value} />,
    math: ({ value }) => <BlockMath math={value} />,
  };

  return (
    <ReactMarkdown
      className="preview-container container"
      remarkPlugins={[gfm, math, plantUml, smartypants]}
      components={components}
    >
      {state}
    </ReactMarkdown>
  );
};
