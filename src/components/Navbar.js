import React, { createElement } from "react";
import BoldIcon from "../svg/bold.svg";
import ItalicIcon from "../svg/italic.svg";
import headingIcon from "../svg/capitals.svg";
import strikethrough from "../svg/strikethrough.svg";
import ulIcon from "../svg/list-2.svg";
import olIcon from "../svg/list.svg";
export const Navbar = ({ state, setstate }) => {
  const handleControlls = (e) => {
    let range = window.getSelection().getRangeAt(0);
    const oldContent = document.createTextNode(range.toString());
    const command = e.currentTarget.getAttribute("data-command");
    const htmlNode = updateTargetText(command, oldContent.data);
    range.deleteContents();
    range.insertNode(htmlNode);
    const editor = document.getElementsByClassName("editor-container");
    setstate(editor[0].innerText);
  };
  const updateTargetText = (command, oldContent) => {
    const span = document.createElement("span");
    const div = document.createElement("div");
    const br = document.createElement("br");
    let parent;
    // console.log(span, div, br);
    let newcontent;
    switch (command) {
      case "*":
      case "**":
      case "~~":
        newcontent = command + oldContent + command;
        span.append(newcontent);
        parent = span;
        console.log(parent, span);

        break;

      case "#":
        // div.append(br);
        newcontent = command + " " + oldContent + "\n";
        span.append(newcontent);
        div.append(span);
        parent = div;

        break;
      case "-":
      case "1.":
        // div.append(br);
        newcontent = command + " " + oldContent + "\n";
        span.append(newcontent);
        div.append(span);
        parent = div;

        break;
      default:
        return;
    }
    return parent;
  };

  return (
    <div className="Navbar navbar-container">
      <button onClick={(e) => handleControlls(e)} data-command="**">
        <img src={BoldIcon} />
      </button>

      <button onClick={(e) => handleControlls(e)} data-command="*">
        <img src={ItalicIcon} />
      </button>

      <button onClick={(e) => handleControlls(e)} data-command="#">
        <img src={headingIcon} />
      </button>

      <button onClick={(e) => handleControlls(e)} data-command="~~">
        <img src={strikethrough} />
      </button>
      <button onClick={(e) => handleControlls(e)} data-command="-">
        <img src={ulIcon} />
      </button>
      <button onClick={(e) => handleControlls(e)} data-command="1.">
        <img src={olIcon} />
      </button>
    </div>
  );
};
// Itali , hading ,  strikethrough , ul , ol , check , blockquote
