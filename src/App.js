import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./SignIn.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Loginpage/login_component";
import SignUp from "./components/Loginpage/signup_component";
import UserDetails from "./components/Loginpage/userDetails";
// import ImageUpload from "./components/Loginpage/imageUpload.";
// import Header from "./components/Homepage/Header";
import HelpDesk from "./components/HelpDesk/Helpdesk";
import MainContent from "./components/Homepage/MainContent";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainContent/>}/>
          <Route
            exact
            path="/sign"
            element={isLoggedIn == "true" ? <UserDetails /> : <Login />}
          />
         
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/userDetails" element={<UserDetails />} />
          <Route path="/helpdesk" element={<HelpDesk/>}></Route>
        </Routes>
        {/* <ImageUpload/> */}
      </div>
    </Router>
  );
}

export default App;
