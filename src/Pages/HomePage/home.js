import React, { useEffect, useState } from "react";
import "./home.css";
import { AdminHome } from "../../components/Admin";
import { StudentHome } from "../../components/Student";
import { withRouter } from "react-router-dom";
import { Paper } from "@material-ui/core";
import { ImCalendar } from "react-icons/im";
import { useStyles } from "./styles";
import { useSelector } from "react-redux";

function Home() {
  const styles = useStyles();
  const role = useSelector((state) => state.userReducer.role);
  const today = Date.now();
  const [user, setUser] = useState();

  useEffect(() => {
    const getRole = () => {
      setUser(role);
    };
    getRole();
  }, [role]);


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


      {user === "admin" ? <AdminHome /> : <StudentHome />}
    </div>
  );
}

export { Home };
export default withRouter(Home);
