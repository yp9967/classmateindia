import React from "react";
import { NavLink  } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <div className="Home-cta">
        <div className="home-para">
        <p className="para-1">
        We provide resources, training, and ongoing support for volunteers.</p>
        <br/>
        <p className="para-2"> Ready to make a
        difference? </p><p className="para-3">Register as a volunteer now and help us connect classrooms
        with caring individuals like you.
        </p>
        </div>
        </div>
        
        <NavLink to="/form" className="Home-button">
          Get started Today!
        </NavLink>
        <div className="push"></div>
    </div>
  );
}

export default Home;
