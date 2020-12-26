import React from "react";
import { DataGrid } from "@material-ui/data-grid";

function DataTable(props) {

  const {rows, size, columns, isLoading} = props

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={size}
        checkboxSelection
        loading={isLoading}
      />
    </div>
  );
}

export { DataTable };
