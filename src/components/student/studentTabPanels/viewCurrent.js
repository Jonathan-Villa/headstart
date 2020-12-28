import React, { useState, useEffect } from "react";
import { DataTable } from "../../DataTable";
import { Paper } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useStylesCurrent } from "./styles";
import { rows, columns } from "./tableAttributes";

function ViewCurrent({ isLoading, error, payload }) {
  const styles = useStylesCurrent();

  return (
    <div className={styles.root}>
      <DataTable
        pageSize={10}
        isLoading={isLoading}
        error={error}
        rows={payload ? payload : []}
        columns={columns}
      />
    </div>
  );
}

export { ViewCurrent };
