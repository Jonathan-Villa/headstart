import React from "react";
import "./styles/home.css";
import {makeStyles} from "@material-ui/core/styles"

import {Grid,} from '@material-ui/core';
import DataTable from "../components/DataTable/datatable";
import Header from "../components/Header/Header"
import HeroSection from "../components/HeroSection";

const useStyles = makeStyles((theme) => ({
  grid: {
      width : '100%' ,
      margin:'0px',
  },


  paper:{
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      
  }

}));
function Home() {

  const classes = useStyles()
  return (
    <Grid container spacing ={4} className = {classes.grid}>
       <Grid item xs={12} md = {12}>
        <Header/>
    </Grid>
      <Grid item xs={12} md = {6}>
        <DataTable/>
    </Grid>
    <Grid item xs={12} md = {6}>
        <DataTable/>
    </Grid>
    <Grid item xs={12} md = {6}>
        <HeroSection/>
    </Grid>

</Grid>

  );
}


export default Home;
