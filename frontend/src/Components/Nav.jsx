import React from "react";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <>
      <div className="Navbar">
        <NavLink to="/">
          <img
            src="https://apply.teachforindia.org/teachforindia_logo.svg"
            alt="logo"
            className="Navbar-logo"
          />
        </NavLink>
        <div>
          <NavLink to="/form">
            <button className="Navbar-btn">Register</button>
          </NavLink>
          <NavLink to="/login">
            
            <button className="Navbar-btn">Admin</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Nav;
