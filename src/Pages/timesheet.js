import React from "react";
import "./pageStyles/timesheet.css";
import { StudentTabs } from "../components/studentTabs";
function TimeSheet() {
  return (
    <div className="main-container">

      <StudentTabs />
    </div>
  );
}

export { TimeSheet };
