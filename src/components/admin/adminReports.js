import React from "react";
import {useStyles} from "./styles"
import {AdminReportSheet} from "../AdminReportSheet/adminReportSheet"
function AdminReports() {
  const styles = useStyles();
  
  return (
    <div className = {styles.Container}>
      <h1>Admin Reports</h1>
      <AdminReportSheet/>
    </div>
  );
}

export { AdminReports };
