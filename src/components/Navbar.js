import Image from "next/image";
const BoldIcon  =  "bold.svg";
const ItalicIcon  =  "italic.svg";
const headingIcon  =  "capitals.svg";
const strikethrough  =  "strikethrough.svg";
const ulIcon  =  "list-2.svg";
const olIcon  =  "list.svg";
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
        <Image width={100} height={25} src={BoldIcon} alt="bold" />
      </button>

      <button onClick={(e) => handleControlls(e)} data-command="*">
        <Image width={100} height={25} src={ItalicIcon} alt="italic" />
      </button>

      <button onClick={(e) => handleControlls(e)} data-command="#">
        <Image width={100} height={25} src={headingIcon} alt="heading" />
      </button>

      <button onClick={(e) => handleControlls(e)} data-command="~~">
        <Image width={100} height={25} src={strikethrough} alt="strike-through" />
      </button>
      <button onClick={(e) => handleControlls(e)} data-command="-">
        <Image width={100} height={25} src={ulIcon} alt="ul" />
      </button>
      <button onClick={(e) => handleControlls(e)} data-command="1.">
        <image width={100} height={25} src={olIcon} alt="ol" />
      </button>
    </div>
  );
};
// Itali , hading ,  strikethrough , ul , ol , check , blockquote
