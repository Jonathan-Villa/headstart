import React, { useState } from "react";
import { useStyles } from "./styles";
import {
  Paper,
  IconButton,
  Tooltip,
  Dialog,
  DialogContent,
} from "@material-ui/core";
import { DataTable } from "../../DataTable/datatable";
import { useSelector } from "react-redux";
import { GrView } from "react-icons/gr";
function AdminReports() {
  const styles = useStyles();
  const rows = useSelector((state) => state.adminTimeSheetReducer.payload);
  const isLoading = useSelector(
    (state) => state.adminTimeSheetReducer.adminLogsIsLoading
  );
  const error = useSelector(
    (state) => state.adminTimeSheetReducer.adminLogsError
  );
  const [click, setClick] = useState(false);
  const [displaySign, setDisplaySign] = useState();

  const handleCellClick = (e) => {
    setDisplaySign(e.value);
    setClick(true);
  };
  const handleClose = () => {
    setClick(false);
  };

  const columns = [
    { field: "grant", headerName: "Grant", width: 90 },
    { field: "date", headerName: "Date", width: 115 },
    { field: "site", headerName: "Site", width: 200 },
    { field: "workPerformed", headerName: "Worked Performed", width: 200 },
    { field: "timeIn", headerName: "Time In", width: 95 },
    { field: "timeOut", headerName: "Time Out", width: 95 },
    {
      renderCell: (params) => (
        <Tooltip title="View Signature">
          <IconButton color="primary" onClick={() => handleCellClick(params)}>
            <GrView />
          </IconButton>
        </Tooltip>
      ),
      field: "preceptorSignature",
      headerName: "Preceptor Signature",
      width: 160,
    },
    { field: "dateOfSign", headerName: "Date of Sign", width: 115 },
  ];

  return (
    <div className={styles.root}>
      <Paper elevation={0} className={styles.paper}>
        <DataTable
          rows={rows ? rows : []}
          columns={columns}
          size={10}
          error={error}
          isLoading={isLoading}
        />
        <Dialog open={click} onClose={handleClose}>
          <DialogContent>
            <img src={displaySign} alt="Preceptor Signature" />
          </DialogContent>
        </Dialog>
      </Paper>
    </div>
  );
}

export { AdminReports };
