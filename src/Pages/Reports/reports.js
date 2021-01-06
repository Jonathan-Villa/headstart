import React, { useState, useEffect } from "react";
import { AdminReports } from "../../components/Admin";
import { useSelector } from "react-redux";
import { Page403 } from "../ErrorPages";
import { withRouter } from "react-router-dom";
function Reports() {
  const isAdminRole = useSelector((state) => state.userReducer.role);
  const [user, setUser] = useState();

  useEffect(() => {
    const getUser = () => {
      setUser(isAdminRole);
    };
    getUser();
  }, [isAdminRole]);

  return (
    <div className="main-container">
      {user === "admin" ? <AdminReports /> : <Page403 />}
    </div>
  );
}
export default withRouter(Reports);
export { Reports };