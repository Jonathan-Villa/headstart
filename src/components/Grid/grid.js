import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));


function Grid() {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.grid}>
      <Grid item xs={12} md={6}>
        <Paper item xs={12} className={classes.paper}>
          1
        </Paper>
      </Grid>
    </Grid>
  );
}

export { Grid };
