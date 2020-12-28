import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import { Paper } from "@material-ui/core";
import { DataTable } from "../../DataTable/datatable";
import {useSelector} from "react-redux"

function AdminReports() {
  const styles = useStyles();
  const rows = useSelector((state)=> state.adminTimeSheetReducer.payload)
  const isLoading = useSelector((state)=> state.adminTimeSheetReducer.adminLogsIsLoading)
  const error = useSelector((state)=> state.adminTimeSheetReducer.adminLogsError)

  const columns = [
    { field: "grant", headerName: "Grant", width: 90 },
    { field: "date", headerName: "Date", width: 115 },
    { field: "site", headerName: "Site", width: 200 },
    { field: "workPerformed", headerName: "Worked Performed", width: 200 },
    { field: "timeIn", headerName: "Time In", width: 95 },
    { field: "timeOut", headerName: "Time Out", width: 95 },
    { field: "preceptorSign", headerName: "Preceptor Signature", width: 160 },
    { field: "dateOfSign", headerName: "Date of Sign", width: 115 },
  ];

  return (
    <div className={styles.root} >
      <Paper  elevation={0} className={styles.paper}>
        <DataTable
          rows={rows? rows : []}
          columns={columns}
          size={10}
          error={error}
          isLoading={isLoading}
        />
      </Paper>
    </div>
  );
}

export { AdminReports };
