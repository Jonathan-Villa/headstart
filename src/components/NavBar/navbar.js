import React, { useState } from "react";
import { IconContext } from "react-icons";
import { RiCloseLine } from "react-icons/ri";
import { VscListFlat } from "react-icons/vsc";
import NavListItems from "./navitems";
import "./nav.css";

function Navbar() {
  const [navClick, setNavIcon] = useState(false);

  // this state is used for burger icon/exit-icon/list item
  const navHandle = () => setNavIcon(!navClick);

  return (
    <IconContext.Provider value={{ color: "white", size: "30px" }}>
      <div className="icon-menu">
        <VscListFlat
          className="icon-stack icon-close"
          color="white"
          onClick={navHandle}
        />
      </div>

      <nav id="nav-bar" className={navClick ? "nav-menu-active" : "menu-close"}>
        <div className="icon-x-container">
          <RiCloseLine className="icon-exit" size="35px" onClick={navHandle} />
        </div>
        <ul className="ul-nav" onClick={navHandle}>
          <NavListItems />
        </ul>
      </nav>
    </IconContext.Provider>
  );
}

export default Navbar;
