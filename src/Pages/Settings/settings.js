import React, { useEffect, useState } from "react";
import "./settings.css";
import { useSelector } from "react-redux";
import { StudentSettings } from "../../components/student";
import { AdminSettings } from "../../components/Admin";
import {Paper} from "@material-ui/core"
import { useStyles} from "./styles"


function Settings() {
  const isAdminRole = useSelector((state) => state.loginReducer.role);
  const [user, setUser]= useState()
  const styles = useStyles()
  const classes = useStyles();


  useEffect(()=> {
    const getUser =()=> {
      setUser(isAdminRole)
    }
    getUser()
  },[isAdminRole])



  return (
    <div className="main-container">
      <Paper className={styles.paper} elevation={3}>
        {user === "admin" ? <AdminSettings /> : <StudentSettings />}
      </Paper>
    </div>
  );
}

export { Settings };
