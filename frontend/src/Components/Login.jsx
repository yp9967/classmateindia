import React from "react";
import { BiLogoLinkedinSquare } from "react-icons/bi";

import { FcGoogle } from "react-icons/fc";

function Login() {
  const handleGoogleLogin = () => {
    alert("Google login clicked");
  };

  const handleLinkedInLogin = () => {
    alert("LinkedIn login clicked");
  };

  return (
    <div className="login-body">
    <div className="login-container">
      <h1>Admin Login</h1>

      <div className="manual-login">
        <div className="input-group">
          <label htmlFor="id">Login id</label>
          <input type="text" name="email" placeholder="Enter id here" />
        </div>
        <div className="input-group">
          <label htmlFor="pass">Password</label>
          <input type="password" name="password" placeholder="Enter password here"/>
        </div>
        <button>Login</button>
      </div>

      {/* <div className="separator">
        <hr />
        <span>OR</span>
        <hr />
      </div> */}

      {/* <div className="social-login">
        <button className="google-login">
          <span className="google-login-logo">
            <FcGoogle />
          </span>
          Login with Google
        </button>
        <button className="linkedin-login">
          <span className="linkedin-login-logo">
            <BiLogoLinkedinSquare />
          </span>
          Login with LinkedIn
        </button>
      </div> */}
    </div>
    </div>
  );
}

export default Login;
