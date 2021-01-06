import React from "react";
import { DataTable } from "../../DataTable";
import { useStylesCurrent } from "./styles";
import { columns } from "./tableAttributes";

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
