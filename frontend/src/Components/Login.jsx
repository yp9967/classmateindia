import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [randomUsername] = useState("1234");
  const [randomPassword] = useState("1234");
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      enteredUsername === randomUsername &&
      enteredPassword === randomPassword
    ) {
      navigate("/admin");
    } else {
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
              id="id"
              placeholder="id-1234"
              onChange={(e) => setEnteredUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              id="pass"
              placeholder="pass-1234"
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
