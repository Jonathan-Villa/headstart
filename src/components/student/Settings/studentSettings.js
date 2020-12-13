import React from "react";
import { useStyles } from "./styles";

function StudentSettings() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <h1>Student Settings</h1>
    </div>
  );
}

export { StudentSettings };
