import React, { useState, useEffect } from "react";
import { DataTable } from "../../DataTable";
import { Paper } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { quickLog } from "../../../redux/actions";
import { useStylesCurrent } from "./styles";

function ViewCurrent() {
  const userID = useSelector((state) => state.loginReducer.id);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const styles = useStylesCurrent();

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

  const rows = [
    {
      id: 1,
      status: "",
      grant: "",
      date: "",
      approvedBy: "",
    },
  ];

  useEffect(() => {
    const fetchQuickLogs = () => {
      axios
        .get("http://localhost:4000/api/timesheet")
        .then(({ data }) => data.filter((index) => index.user === userID))
        .then(
          (res) =>
            setData({
              log: res.map((m, key) => ({
                id: key,
                grant: m["grant"],
                date: m["date"],
                site: m["site"],
                workPerformed: m["workPerformed"],
                timeIn: m["timeIn"],
                timeOut: m["timeOut"],
                preceptorSignature: m["preceptorSignature"],
                dateOfSign: m["dateOfSign"],
              })),
            }) || dispatch(quickLog(res))
        )
        .catch((err) => console.log(err));
    };
    fetchQuickLogs();
  }, [dispatch, userID]);

  return (
    <div>
      <Paper className={styles.paper} elevation={3}>
        <DataTable pageSize={4} rows={data.log || rows} columns={columns} />
      </Paper>
    </div>
  );
}

export { ViewCurrent };
