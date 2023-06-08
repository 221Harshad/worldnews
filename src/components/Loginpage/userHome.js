import React from "react";
import NewsList from "../Newslist/Newslist";

import './userHome.css'
export default function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "/";
  };
  const helpdesk = () => {
    window.location.href = "/helpdesk";
  };
  const style = {
    background: "linear-gradient(-60deg, #16a085 0%, #f4d03f 100%)",
  };
  const styleplus = {
    background:
      "linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147))",
  };
  return (
    <div>
      <div className="welcomepage" style={styleplus}>
        <div>
        <h1 > Welcome {userData.fname}{userData.lname}</h1>
          <div className="welcome" style={style}>
          
            <p style={{ fontSize: "20px" }}>{userData.email}</p>
            <br />
            <button onClick={helpdesk} className="btn btn-success
            ">HelpDesk</button>
            <button onClick={logOut} className="btn btn-primary">
              Log Out
            </button>
          
            </div>

          <NewsList />
         
        </div>
      </div>
    </div>
  );
}
