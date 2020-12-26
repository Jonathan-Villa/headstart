import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import { Paper } from "@material-ui/core";
import { DataTable } from "../../DataTable/datatable";
import axios from "axios";

function AdminReports() {
  const styles = useStyles();
  const [reportsData, setReportsData] = useState([]);


  useEffect(() => {
    const getData = () => {
      setTimeout(()=> {
        axios.get("http://localhost:4000/api/request-user-logs").then((res) =>
        setReportsData(
          res.data.map((m, key) => ({
            id: key,
            grant: m["grant"],
            date: m["date"],
            site: m["site"],
            workPerformed: m["workPerformed"],
            timeIn: m["timeIn"],
            timeOut: m["timeOut"],
            preceptorSignature: m["preceptorSignature"],
            dateOfSign: m["dateOfSign"],
          }))
        ));
      },[2000])
    };

    getData();
  }, []);

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
    <div className={styles.root} >
      <Paper  elevation={0} className={styles.paper}>
        <DataTable
          rows={reportsData || defaultRows}
          columns={columns}
          size={20}
          isLoading={reportsData !== [] ? true : false}
        />
      </Paper>
    </div>
  );
}

export { AdminReports };
