import React from "react";
import "./styles/home.css";
import { useSelector} from "react-redux"

function Home() {
  const isAuth = useSelector(state=> state.loginReducer);


  return (
    <div className="main-container">
      <div className="">
        <h1>Home page</h1>
      </div>
    </div>
  );
}

export default Home;
