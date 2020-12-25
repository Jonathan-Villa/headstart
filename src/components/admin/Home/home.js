import React, { useState, useEffect } from "react";
import { Paper } from "@material-ui/core";
import { QuickLogForm } from "../../QuickLog";
import { useStyles } from "./styles";
import { useSelector } from "react-redux";
import { DataTable } from "../../DataTable/datatable";

function AdminHome() {
  const styles = useStyles();
  const getUserLogs =
    useSelector((state) => state.quickLogReducer.payload)

  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows({
      data: getUserLogs,
    });
  }, [getUserLogs]);


  const columns = [
    { field: "date", headerName: "Date", width: 90 },
    { field: "firstName", headerName: "Student Name", width: 90 },
    { field: "hours", headerName: "Hours", width: 200 },
    { field: "grant", headerName: "Grant", width: 130 },
  ];
  const defaultRows = [
    {
      id: 1,
      date: "",
      firstName: "",
      hours: "",
      grant: "",
    },
  ];

  return (
    <div className={styles.root}>
      <QuickLogForm />

      <Paper className={styles.paper} elevation={3}>
        <DataTable rows={rows.data || defaultRows} columns={columns} size={4} />
      </Paper>
    </div>
  );
}

export { AdminHome };
