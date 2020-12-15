import React from "react";
import {DataTable} from "../../DataTable"
import { QuickLogForm } from "../../QuickLog";
import { useStyles } from "./styles";
import { useSelector } from "react-redux"

function StudentHome() {
  const styles = useStyles();

  
  return (
    <div className={styles.Container}>
      <QuickLogForm />
 
    </div>
  );
}

export { StudentHome };
