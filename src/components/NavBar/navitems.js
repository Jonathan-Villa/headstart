import React from "react";
import { Link } from "react-router-dom";

function Navitems() {
  return (
    <>
      <li className="li-item">
        <Link
          className="nav-link"
          to="/home"
          style={{ textDecoration: "none" }}
        >
          Home
        </Link>
      </li>
      <li className="li-item">
        <Link className="nav-link" to="/timesheet">
          Time Sheet
        </Link>
      </li>
      <li className="li-item">
        <Link className="nav-link" to="/report">
          Report
        </Link>
      </li>
      <li className="li-item">
        <Link className="nav-link" to="/profile">
          Profile
        </Link>
      </li>
      <li className="li-item">
        <Link className="nav-link" to="/login">
          Sign Out
        </Link>
      </li>
    </>
  );
}

export default Navitems;
