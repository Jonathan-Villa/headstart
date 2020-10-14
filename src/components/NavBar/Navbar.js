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
            <Link to="/home" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>

          <li className="li-item">
            <Link href="/timesheet">Time Sheet</Link>
          </li>
          <li className="li-item">
            <Link href="/report">Report</Link>
          </li>
          <li className="li-item">
            <Link href="/profile">Profile</Link>
          </li>
          <li className="li-item">
            <Link href="/">Sign Out</Link>
          </li>
        </ul>
      </nav>
    </IconContext.Provider>
  );
}

export default Navbar;
