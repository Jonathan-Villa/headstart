import React from "react";
import "./pageStyles/profile.css";
import { useSelector } from "react-redux";
import { StudentSettings } from "../components/student";
import { AdminSettings } from "../components/admin";
function Settings() {
  const isAdminRole = useSelector((state) => state.loginReducer.role);
  return (
    <div className="main-container">
      {isAdminRole === "admin" ? <AdminSettings /> : <StudentSettings />}
    </div>
  );
}

export { Settings };
