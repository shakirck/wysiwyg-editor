import React from "react";
import BoldIcon from "../svg/bold.svg";
import ItalicIcon from "../svg/italic.svg";
import headingIcon from "../svg/capitals.svg";
import strikethrough from "../svg/strikethrough.svg";
import ulIcon from "../svg/list-2.svg";
import olIcon from "../svg/list.svg";
export const Navbar = () => {
  return (
    <div className="Navbar navbar-container">
      <button>
        <img src={BoldIcon} />
      </button>

      <button>
        <img src={ItalicIcon} />
      </button>

      <button>
        <img src={headingIcon} />
      </button>

      <button>
        <img src={strikethrough} />
      </button>
      <button>
        <img src={ulIcon} />
      </button>
      <button>
        <img src={olIcon} />
      </button>
    </div>
  );
};
// Itali , hading ,  strikethrough , ul , ol , check , blockquote
