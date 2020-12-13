import React from "react";
import {CenteredGrid} from "../CenteredGrid/centeredGrid"
import { useStyles } from './styles';
import {TimeSheet} from "../TimeSheet/timesheet"



function AdminTimeSheet() {
  const styles = useStyles()
  return (
    <div className={styles.Container}>
     
      <TimeSheet/>
    </div>
  );
}

export { AdminTimeSheet };
