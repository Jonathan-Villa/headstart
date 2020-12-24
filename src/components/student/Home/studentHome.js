import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DataTable } from "../../DataTable";
import { QuickLogForm } from "../../QuickLog";
import { useStyles } from "./styles";
import {Paper} from "@material-ui/core"

function StudentHome() {
  const styles = useStyles();
  const getQuickLogData = useSelector((state) => state.quickLogReducer.payload);

  const [data, setData] = useState([]);
  const columns = [
    { field: "status", headerName: "Status", width: 90 },
    { field: "grant", headerName: "Grant", width: 90 },
    { field: "site", headerName: "Site", width: 200 },
    { field: "approvedBy", headerName: "Approved By", width: 130 },
  ];
  const rows = [
    {
      id: 1,
      status: "",
      grant: "",
      date: "",
      approvedBy: "",
    },
  ];

  console.log(data);
  useEffect(() => {
    setData({
      log: getQuickLogData,
    });
  }, [getQuickLogData]);

  return (
    <div className={styles.Container}>
      <QuickLogForm />
      <Paper className={styles.paper} elevation={3}>
        <DataTable rows={data.log || rows} columns={columns} size={4} />
      </Paper>
    </div>
  );
}

export { StudentHome };
