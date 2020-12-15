import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";


const columns = [
  { field: "grant", headerName: "Grant", width: 100 },
  { field: "studentname", headerName: "Student Name", width: 175 },
  { field: "hoursday", headerName: "Hours/Day", width: 100 },
  {
    field: "date",
    headerName: "Date",
    type: "Date",
    width: 125,
  },
  { field: "site", headerName: "Site", width : 100 },

];

const rows = [
  {
    id: 1,
    studentname: "Rain",
    grant: "A",
    site: "Oregon",
    date: "12/21/2020",
    approvedBy: "bob",
  },
];

function AdminDataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows}  columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}

export { AdminDataTable };
