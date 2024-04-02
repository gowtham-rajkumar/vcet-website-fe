import React from "react";
import Login from "../Images/loginImg.jpeg";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./LoginPageStyles.css";
import { useState } from "react";
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const LoginPage = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const handlesubmit = (e) => {
    e.preventDefault();
    toast.success("Success");
  };
  return (
    <>
      <div className="dep-heading">
        <h1>THE DEPARTMENT OF ELECTRONICS AND COMMUNICATION</h1>
      </div>
      <div className="logTotal-container">
        <div className="log-container">
          <div className="log-imgContainer">
            <img src={Login} alt="login" />
          </div>
          <div className="log-bottom">
            <div class="log-nav">
              <ul style={{ listStyle: "none" }}>
                <li>
                  <h3 style={{ fontSize: "1.5rem" }}>SignIn</h3>
                </li>
              </ul>
              <ul class="social-icons">
                <li>
                  <FaFacebook />
                </li>
                <li>
                  <FaXTwitter />
                </li>
              </ul>
            </div>
            <div className="log-form">
              <form action="">
                <div className="form-items">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={e=>setUsername(e.target.value)}
                    placeholder="Enter Your Username"
                    required
                  />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    placeholder="Enter Your Password"
                    required
                  />
                  <div className="remember-me">
                    <input type="checkbox" id="remember" name="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                  <button type="submit" onClick={(e) => handlesubmit(e)}>
                    Sign In
                  </button>
                  <p>
                    Don't have an account ?{" "}
                    <a href="/registrationpage">Register here</a>
                  </p>
                </div>
              </form>
            </div>
            <div className="log-footer"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
