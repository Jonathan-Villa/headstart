import React from "react";
import {useStyles} from "./styles"
import {LinearProgress} from "@material-ui/core"

function LinearProgressBar() {
    const styles = useStyles()

  return (
      <div className={styles.progressBar}>
        <LinearProgress variant="indeterminate" color="primary" />
      </div>
  )
}

export { LinearProgressBar };
