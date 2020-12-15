import React from "react";
import {useStyles} from "../styles"

function AdminReports() {
  const styles = useStyles();
  
  return (
    <div className = {styles.root}>
      <h1>Admin Reports</h1>
    </div>
  );
}

export { AdminReports };
