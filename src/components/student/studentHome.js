import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { DataTable } from "../DataTable";

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

function StudentHome() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={4} className={classes.grid}>
        <Grid item xs={12} md={5}>
          <DataTable />
        </Grid>
      </Grid>
    </div>
  );
}

export  {StudentHome};
