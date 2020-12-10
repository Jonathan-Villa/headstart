import React from "react";
import "./timesheet.css";
import { useSelector } from "react-redux";
import { StudentTimeSheet } from "../../components/student";
import { AdminTimeSheet } from "../../components/Admin";

function TimeSheet() {
  const isAdminRole = useSelector((state) => state.loginReducer.role);
  return (
    <div className="main-container">
      {isAdminRole === "admin" ? <AdminTimeSheet /> : <StudentTimeSheet />}
    </div>
  );
}

export { TimeSheet };
