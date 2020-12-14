import React from "react";
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
        newcontent = command + " " + oldContent + "\n";
        span.append(newcontent);
        div.append(span);
        parent = div;

        break;
      case "-":
      case "1.":
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
        <img src={BoldIcon} alt="bold" />
      </button>

      <button onClick={(e) => handleControlls(e)} data-command="*">
        <img src={ItalicIcon} alt="italic" />
      </button>

      <button onClick={(e) => handleControlls(e)} data-command="#">
        <img src={headingIcon} alt="heading" />
      </button>

      <button onClick={(e) => handleControlls(e)} data-command="~~">
        <img src={strikethrough} alt="strike-through" />
      </button>
      <button onClick={(e) => handleControlls(e)} data-command="-">
        <img src={ulIcon} alt="ul" />
      </button>
      <button onClick={(e) => handleControlls(e)} data-command="1.">
        <img src={olIcon} alt="ol" />
      </button>
    </div>
  );
};
// Itali , hading ,  strikethrough , ul , ol , check , blockquote
