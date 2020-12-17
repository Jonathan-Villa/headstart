import React from "react";
import {useStylesViewAll} from "./styles"
import { Paper } from "@material-ui/core";
import { DataTable} from "../../DataTable"
import {rows, columns} from "./tableAttributes"

function ViewRejected() {
  const styles = useStylesViewAll()
  return (
    <div>
      <Paper className={styles.paper}>
        <DataTable rows={rows} columns={columns} size={4}/>
      </Paper>
    </div>
  );
}

export { ViewRejected };
