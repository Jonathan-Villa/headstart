import React, {useState, useEffect} from "react";
import "./timesheet.css";
import { useSelector } from "react-redux";
import { StudentTimeSheet } from "../../components/Student";
import { AdminTimeSheet } from "../../components/Admin";

function TimeSheet() {
  const isAdminRole = useSelector((state) => state.userReducer.role);
  const [user, setUser] = useState()

  useEffect(()=> {
    const getUser = ()=> {
      setUser(isAdminRole)
    }
    getUser()
  },[isAdminRole])

  return (
    <div className="main-container">
      {user === "admin" ? <AdminTimeSheet /> : <StudentTimeSheet />}
    </div>
  );
}

export { TimeSheet };
