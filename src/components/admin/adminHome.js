import React from "react";
import {  Paper } from "@material-ui/core";
import { AdminDataTable } from "./AdminDataTable/adminDataTable";
import { QuickLogForm } from "../QuickLog";
import { useStyles } from "./styles";


function AdminHome() {
  const styles = useStyles();
  return (
    <div  className={styles.Container}>
      <QuickLogForm />

      <Paper className={styles.paper} elevation={3}>
        <AdminDataTable />
      </Paper>
      
    </div>
  );
}

export { AdminHome };
