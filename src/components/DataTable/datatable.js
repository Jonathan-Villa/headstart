import React from "react";
import { DataGrid } from "@material-ui/data-grid";

function DataTable(props) {

  const {rows, size, columns} = props

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={size}
        checkboxSelection
      />
    </div>
  );
}

export { DataTable };
