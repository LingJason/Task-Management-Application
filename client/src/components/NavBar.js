import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span className="navbar-name">TMS</span>
        <img src="https://cdn-icons-png.flaticon.com/512/4697/4697260.png" alt="logo" className="navbar-logo"/>
        </Link>
      </div>
    </nav>
  );
}