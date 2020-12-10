import React from "react";
import { Container, Paper } from "@material-ui/core";
import { DataTable } from "../../DataTable";
import { QuickLogForm } from "../../QuickLog";
import { useStyles } from "./styles";

function StudentHome() {
  const styles = useStyles();
  return (
    <Container className={styles.root}>
      <QuickLogForm />

      <Paper className={styles.paper} elevation={3}>
        <DataTable />
      </Paper>
    </Container>
  );
}

export { StudentHome };
