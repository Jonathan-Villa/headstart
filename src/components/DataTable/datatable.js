import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import {Container} from "@material-ui/core"
import {useStyles} from "./styles"

function DataTable(props) {
  const { rows, size, columns, isLoading, error, handleCellClick } = props;
  const classes = useStyles()
  



  return (
    <Container className={classes.root}  >
      <DataGrid
        onCellClick={handleCellClick}
        scrollbarSize={8}
        error={error}
        rows={rows}
        showCellRightBorder
        showColumnRightBorder
        columns={columns}
        pageSize={size}
        disableExtendRowFullWidth={false}
        checkboxSelection
        autoPageSize
        loading={isLoading}
      />
    </Container>
  );
}

export { DataTable };
