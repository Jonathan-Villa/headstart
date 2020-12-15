import React, { useState, useEffect } from "react";
import { DataTable } from "../../DataTable";
import { Paper } from "@material-ui/core";
import { useSelector} from "react-redux";
import { useStylesCurrent } from "./styles";
import {rows, columns} from "./tableAttributes"

function ViewCurrent() {
  const timeSheetData = useSelector((state) => state.quickLogReducer.payload);
  const styles = useStylesCurrent();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData({
      timeSheet: timeSheetData,
    });
  }, [timeSheetData]);


  return (
    <div>
      <Paper className={styles.paper} elevation={3}>
        <DataTable
          pageSize={4}
          rows={data.timeSheet || rows}
          columns={columns}
        />
      </Paper>
    </div>
  );
}

export { ViewCurrent };
