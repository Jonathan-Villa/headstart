import React from "react";
import "./pageStyles/home.css";
import { AdminHome } from "../components/admin";
import { useSelector } from "react-redux";
import { StudentHome } from "../components/student";
import { useLocation, useHistory, withRouter } from "react-router-dom";
function Home() {
  const isAdminRole = useSelector((state) => state.loginReducer.role);
  const location = useLocation();
  const history = useHistory();

  return (
    <div className="main-container">
      {isAdminRole === "admin" ? <AdminHome /> : <StudentHome />}
    </div>
  );
}

export { Home };
export default withRouter(Home);
