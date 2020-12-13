import React from "react";
import "./home.css";
import { AdminHome } from "../../components/admin";
import { useSelector } from "react-redux";
import { StudentHome } from "../../components/student";
import { withRouter } from "react-router-dom";
import { Paper } from "@material-ui/core";
import { ImCalendar } from "react-icons/im";
import { useStyles } from "./styles";

function Home() {
  const styles = useStyles();
  const isAdminRole = useSelector((state) => state.loginReducer.role);

  const today = Date.now();

  return (
    <div className="main-container">
    
        <Paper className={styles.paper}>
          <div className="icon-container">
            <ImCalendar size={70} />
          </div>
          <div className="date-container-home">
            <h2>
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              }).format(today)}
            </h2>
            <h3 className="today-h3">Today</h3>
          </div>
        </Paper>

        {isAdminRole === "admin" ? <AdminHome /> : <StudentHome />}

    </div>
  );
}

export { Home };
export default withRouter(Home);
