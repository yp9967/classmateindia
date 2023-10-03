import React from "react";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <>
      <div className="Navbar">
        <NavLink to="/home">
        <img src="https://apply.teachforindia.org/teachforindia_logo.svg" alt="logo" className="Navbar-logo"/>
        </NavLink>
        <NavLink to="/login" className="Navbar-title2">
          <button className="Navbar-btn">Admin</button>
        </NavLink>
      </div>
    </>
  );
}

export default Nav;
