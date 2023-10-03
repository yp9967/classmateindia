import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <p className="Home-cta">
        We provide resources, training, and ongoing support for volunteers.
        Develop new skills and gain valuable experience while giving back. Do
        you believe in the power of knowledge to change lives? Ready to make a
        difference? Register as a volunteer now and help us connect classrooms
        with caring individuals like you.
        </p>
        <NavLink to="/form" className="Home-button">
          Get started Today!
        </NavLink>
        <div className="push"></div>
    </div>
  );
}

export default Home;
