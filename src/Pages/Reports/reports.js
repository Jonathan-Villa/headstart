<<<<<<< HEAD
import React, {useState, useEffect} from "react";
import { AdminReports } from "../../components/Admin";
=======
import React from "react";
import { AdminReports } from "../../components/admin";
>>>>>>> 24d517c3c9cdc3612dd57ba3acf8a6e4a3a48200
import { useSelector } from "react-redux";
import { Page403 } from "../errorPages/error403";

function Reports() {
  const isAdminRole = useSelector((state) => state.loginReducer.role);
  const [user, setUser] = useState()

  useEffect(()=> {
    const getUser = ()=> {
      setUser(isAdminRole)
    }
    getUser()
  },[isAdminRole])

  return (
    <div className="main-container">
      {user === "admin" ? <AdminReports /> : <Page403 />}
    </div>
  );
}

export { Reports };
