import React from "react";
import { StudentTabs } from "../../tabs";
import {} from "@material-ui/core";
import { useStyles } from "./styles";

function StudentTimeSheet() {
  const styles = useStyles();
  return (
    <div>
      <StudentTabs />
    </div>
  );
}

export { StudentTimeSheet };
