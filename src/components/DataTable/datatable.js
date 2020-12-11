import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
//import { DataTable } from '@material-ui/core';

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
  {
    valueGetter: (params) =>
      `${params.getValue("firstName") || ""} ${
        params.getValue("lastName") || ""
      }`,
  },
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
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows}  columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}

export { DataTable };
