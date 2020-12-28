import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Dialog,
  DialogContent,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import { GrView } from "react-icons/gr";
import { useStyles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { DataTable } from "../../DataTable/datatable";
import { ColDef } from "@material-ui/data-grid/";
import axios from "axios";
import {
  adminTimeSheetError,
  adminTimeSheetLoading,
  adminTimeSheet,
  alertError,
} from "../../../redux/actions";

function AdminHome() {
  const styles = useStyles();
  const dispatch = useDispatch();
  const studentName = useSelector((state)=> state.userReducer.name)
  const rows = useSelector((state) => state.adminTimeSheetReducer.payload);
  const [click, setClick] = useState(false);
  const [displaySign, setDisplaySign] = useState();
  const adminLogsIsLoading = useSelector(
    (state) => state.adminTimeSheetReducer.adminLogsIsLoading
  );
  const error = useSelector(
    (state) => state.adminTimeSheetReducer.adminLogsError
  );
  useEffect(() => {
    const getData = () => {
      dispatch(adminTimeSheetLoading());
      axios
        .get("http://localhost:4000/api/request-user-logs")
        .then((res) =>
          dispatch(
            adminTimeSheet(
              res.data.map((m, key) => ({
                id: key,
                name: m["name"],
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
          )
        )
        .catch(
          (err) =>
            dispatch(adminTimeSheetError()) &&
            dispatch(alertError("Error loading logs "))
        );
    };
    getData();
  }, [dispatch]);

  const handleCellClick = (e) => {
    setDisplaySign(e.value);
    setClick(true);
  };
  const handleClose = () => {
    setClick(false);
  };

  const columns = [
    { field: "date", type: "date", headerName: "Date", width: 110 },
    { field: "name", headerName: "Name", width: 130 },
    {
      field: "hours",
      headerName: "Hours",
      width: 70,
      description: "Hours per shift",
    },
    { field: "grant", headerName: "Grant", width: 75 },
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
  ];

  return (
    <Container className={styles.root}>
      <Box className={styles.box}>
        <DataTable
          rows={rows ? rows : []}
          error={error}
          columns={columns}
          isLoading={adminLogsIsLoading}
          size={6}
        />
      </Box>

      <Dialog open={click} onClose={handleClose}>
        <DialogContent>
          <img src={displaySign} alt="Preceptor Signature" />
        </DialogContent>
      </Dialog>
    </Container>
  );
}

export { AdminHome };
