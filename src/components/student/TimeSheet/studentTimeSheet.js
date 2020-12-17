import React from "react";
import { StudentTabs } from "../../Tabs";
import { useStyles } from "./styles";

function StudentTimeSheet() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <StudentTabs />
    </div>
  );
}

export { StudentTimeSheet };
