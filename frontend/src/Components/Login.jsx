import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [randomUsername] = useState("1234"); // Randomly generated username
  const [randomPassword] = useState("1234"); // Randomly generated password
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (enteredUsername === randomUsername && enteredPassword === randomPassword) {
      // Redirect to the admin page
      navigate("/admin");
    } else {
      // Display an error message for invalid credentials
      setError("Invalid username or password");
    }
  };

 
    return (
      <div className="login-body">
        <div className="login-container">
          <h1>Admin Login</h1>

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="id">Login id</label>
              <input
                type="text"
                name="email"
                placeholder="Enter id here"
                onChange={(e) => setEnteredUsername(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="pass">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password here"
                onChange={(e) => setEnteredPassword(e.target.value)}
              />
            </div>
            <button className="login-btn">Login</button>
          </form>
          {error && <p className="err">{error}</p>}
        </div>
      </div>
    );
  }


export default Login;
