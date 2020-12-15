import React, { useEffect, useState } from "react";
import "./settings.css";
import { useSelector } from "react-redux";
import { StudentSettings } from "../../components/student";
import { AdminSettings } from "../../components/Admin";
import {Paper} from "@material-ui/core"
import { useStyles} from "./styles"
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';

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
