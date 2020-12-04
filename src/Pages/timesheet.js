import React from "react";
import "./pageStyles/timesheet.css";
import { useSelector } from "react-redux";
import { StudentTimeSheet } from "../components/student";
import { AdminTimeSheet } from "../components/admin";

function TimeSheet() {
  const isAdminRole = useSelector((state) => state.loginReducer.role);
  return (
    <div className="main-container">
      {isAdminRole === "admin" ? <AdminTimeSheet /> : <StudentTimeSheet />}
    </div>
  );
}

export { TimeSheet };
