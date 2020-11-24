import React from "react";
import "./styles/home.css";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import DataTable from "../components/DataTable/datatable";

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

function Home() {
  const classes = useStyles();
  return (
    <div className="main-container">
      <Grid container spacing={4} className={classes.grid}>
        <Grid item xs={12} md={12}></Grid>
        <Grid item xs={12} md={6}>
          <DataTable />
        </Grid>
        <Grid item xs={12} md={6}>
          <DataTable />
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </div>
  );
}

export default Home;
