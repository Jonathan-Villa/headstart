import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataTable } from "../../DataTable";
import { QuickLogForm } from "../../QuickLog";
import { useStyles } from "./styles";
import { Paper } from "@material-ui/core";
import {
  timeSheet,
  timeSheetError,
  timeSheetLoading,
} from "../../../redux/actions";

function StudentHome() {
  const styles = useStyles();
  const rows = useSelector((state) => state.timeSheetReducer.payload);
  const role = useSelector((state) => state.userReducer.role);
  const userID = useSelector((state) => state.userReducer.id);
  const isLoading = useSelector(
    (state) => state.timeSheetReducer.isTimeSheetLoading
  );
  const error = useSelector((state) => state.timeSheetReducer.isTimeSheetError);
  const dispatch = useDispatch();

  const columns = [
    { field: "status", headerName: "Status", width: 90 },
    { field: "grant", headerName: "Grant", width: 90 },
    { field: "site", headerName: "Site", width: 200 },
    { field: "approvedBy", headerName: "Approved By", width: 130 },
  ];
  useEffect(() => {
    const fetchQuickLogs = async () => {
      dispatch(timeSheetLoading());

      const fetchAPI = await fetch(
        "http://localhost:4000/api/timesheet"
      ).catch((err) => dispatch(timeSheetError()));

      const data = await fetchAPI.json();

      const filterID = data.filter((index) =>
        role === "admin" ? true : index.user === userID
      );

      dispatch(
        timeSheet(
          filterID.map((m, key) => ({
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
        )
      );
    };

    fetchQuickLogs();
  }, [dispatch, userID, role]);

  return (
    <div className={styles.Container}>
      <QuickLogForm />
      <Paper className={styles.paper} elevation={3}>
        <DataTable
          rows={rows ? rows : []}
          isLoading={isLoading}
          error={error}
          columns={columns}
          size={10}
        />
      </Paper>
    </div>
  );
}

export { StudentHome };
