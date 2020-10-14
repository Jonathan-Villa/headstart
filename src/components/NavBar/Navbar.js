import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { RiCloseLine } from "react-icons/ri";
import { VscListFlat } from "react-icons/vsc";
import "./nav.css";

function Navbar() {
  const [navIcon, setNavIcon] = useState(false);

  const navHandle = () => {
    setNavIcon(!navIcon);
  };

  return (
    <IconContext.Provider value={{ color: "white", size: "30px" }}>
      <div className="icon-menu">
        <VscListFlat
          className="icon-stack icon-close"
          color="white"
          onClick={navHandle}
        />
      </div>

      <nav className={navIcon ? "nav-menu-active" : "menu-close"}>
        <ul>
          <div className="icon">
            <RiCloseLine
              className="icon-exit icon-open"
              size="30px"
              onClick={navHandle}
            />
          </div>
          <li className="li-item">
            <a href="/home">Home</a>
          </li>
          <li className="li-item">
            <a href="/timesheet">Time Sheet</a>
          </li>
          <li className="li-item">
            <a href="/report">Report</a>
          </li>
          <li className="li-item">
            <a href="/profile">Profile</a>
          </li>
          <li className="li-item">
            <a href="/">Sign Out</a>
          </li>
        </ul>
      </nav>
    </IconContext.Provider>
  );
}

export default Navbar;
