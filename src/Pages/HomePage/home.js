import React, { useEffect, useState } from "react";
import "./home.css";
import { AdminHome } from "../../components/Admin";
import { StudentHome } from "../../components/Student";
import { withRouter } from "react-router-dom";
import { Paper } from "@material-ui/core";
import { ImCalendar } from "react-icons/im";
import { useStyles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { quickLog } from "../../redux/actions";
import {io} from "socket.io-client"

function Home(props) {
  const styles = useStyles();
  const role = useSelector((state) => state.loginReducer.role);
  const today = Date.now();
  const [user, setUser] = useState();
  const userID = useSelector((state) => state.loginReducer.id);
  const dispatch = useDispatch();

  useEffect(() => {
    const getRole = () => {
      setUser(role);
    };
    getRole();
  }, [role]);

  useEffect(() => {
    const fetchQuickLogs = () => {
      axios
        .get("http://localhost:4000/api/timesheet")
        .then(({ data }) => data.filter((index) =>  role === "admin" ?  true  :  index.user === userID))
        .then((res) =>
          dispatch(
            quickLog(
              res.map((m, key) => ({
                id: key,
                grant: m["grant"],
                date: m["date"],
                site: m["site"],
                workPerformed: m["workPerformed"],
                timeIn: m["timeIn"],
                timeOut: m["timeOut"],
                preceptorSignature: m["preceptorSignature"],
                dateOfSign: m["dateOfSign"],
              }))
            )
          )
        )
        .catch((err) => console.log(err));
    };
    fetchQuickLogs();
  }, [dispatch, userID,role]);

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
