import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
//import { DataTable } from '@material-ui/core';
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { quickLog } from "../../redux/actions";

const columns = [
  { field: "status", headerName: "Status", width: 100 },
  { field: "grant", headerName: "Grant", width: 100 },
  { field: "site", headerName: "Site", width: 200 },
  {
    field: "date",
    headerName: "Date",
    type: "Date",
    width: 100,
  },
  { field: "approvedBy", headerName: "Approved By", width: 140 },
];

const rows = [
  {
    id: 1,
    status: "Snow",
    grant: "H",
    site: "Chicago",
    date: "12/30/2020",
    approvedBy: "John",
  },
];

function DataTable() {
  const userTimeSheetData = useSelector(
    (state) => state.loginReducer.payload.id
  );

  const getData = useSelector((state) => state.quickLogReducer.payload);
  const [data, setData ] = useState(...getData || "")
  const dispatch = useDispatch();
 
  useEffect(() => {
    const fetchQuickLogs = async() => {
      await axios
        .get("http://localhost:4000/api/login")
        .then(({ data }) =>
          data.filter((index) => index.user === userTimeSheetData)
        )
        .then((res) => setData(res))
        .catch((err) => console.log(err));
    };
    fetchQuickLogs();
  }, [dispatch, userTimeSheetData]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
}

export { DataTable };
