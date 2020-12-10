import React from "react";
import { AdminReports } from "../../components/Admin";
import { useSelector } from "react-redux";
import { Page403 } from "../ErrorPages/error403";

function Reports() {
  const isAdminRole = useSelector((state) => state.loginReducer.role);
  return (
    <div className="main-container">
      {isAdminRole === "admin" ? <AdminReports /> : <Page403 />}
    </div>
  );
}

export { Reports };
