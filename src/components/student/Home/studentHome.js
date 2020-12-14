import React from "react";
import { Paper } from "@material-ui/core";
import { DataTable } from "../../DataTable";
import { QuickLogForm } from "../../QuickLog";
import { useStyles } from "./styles";

function StudentHome() {
  const styles = useStyles();
  
  return (
    <div className={styles.Container}>
      <QuickLogForm />

      <Paper className={styles.paper} elevation={3}>
        <DataTable />
      </Paper>
    </div>
  );
}

export { StudentHome };
