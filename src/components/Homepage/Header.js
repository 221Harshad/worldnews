import React from "react";
import './homepage.css'
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar className="navbar" >
      <Nav >
        <li className="logo">
          <Link to="/"><img src="/images/logo.png" alt="logo" /></Link>
        </li>
        <li>
          <Link to="/sign" className="signin">
            <FaUserCircle /> Sign In
          </Link>
        </li>
      </Nav>
    </Navbar>
  );
};

export default Header;
