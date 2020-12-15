import React from "react";
import { Paper } from "@material-ui/core";
import { DataTable } from "../../DataTable";
import {useStylesViewAll} from "./styles/"
import {rows, columns} from "./tableAttributes"
function ViewAll() {
  const styles = useStylesViewAll()
  return (
    <div>
      <Paper className={styles.paper} elevation={3}>
        <DataTable rows={rows} columns={columns} size={4} />
      </Paper>
    </div>
  );
}

export { ViewAll };
