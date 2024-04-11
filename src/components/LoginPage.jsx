import React from "react";
import Login from "../Images/loginImg.jpeg";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./LoginPageStyles.css";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showpassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const changeState = () => {
    setShowPassword(!showpassword);
  };
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(username, password);
      navigate("/ecedepartment");
    } catch (error) {
      var code = error.code;
      switch (code) {
        case "auth/invalid-email":
          toast.warn("Invalid Email", { theme: "colored" });
          break;
        case "auth/user-disabled":
          toast.info("Your account has been disabled.", { theme: "colored" });
          break;
        case "auth/user-not-found":
          toast.warn("User not found.", { theme: "colored" });
          break;
        case "auth/invalid-credential":
          toast.warn("invalid-credential.", { theme: "colored" });
          break;
        default:
          toast.info("Somthing Went Wrong", { theme: "colored" });
          console.log(error.message);
      }
    }
  };

  return (
    <>
      <ToastContainer></ToastContainer>
      <div className="dep-heading">
        <h1>THE DEPARTMENT OF ELECTRONICS AND COMMUNICATION</h1>
      </div>
      <div className="logTotal-container">
        <div className="log-container">
          <div className="log-imgContainer">
            <img src={Login} alt="login" />
          </div>
          <div className="log-bottom">
            <div className="log-nav">
              <ul style={{ listStyle: "none" }}>
                <li>
                  <h3 style={{ fontSize: "1.5rem" }}>SignIn</h3>
                </li>
              </ul>
              <ul className="social-icons">
                <li>
                  <FaFacebook />
                </li>
                <li>
                  <FaXTwitter />
                </li>
              </ul>
            </div>
            <div className="log-form">
              <form onSubmit={handleLogin}>
                <div className="form-items">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter Your Email ID"
                    required
                  />
                  <input
                    type={showpassword ? "text" : "password"}
                    id="password"
                    name="password"
                    className="password-log"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Your Password"
                    required
                  />
                  <div className="remember-me">
                    <input
                      type="checkbox"
                      id="remember"
                      name="remember"
                      checked={showpassword}
                      onChange={changeState}
                    />
                    <label htmlFor="remember">show Password</label>
                  </div>
                  <button className="log-button" type="submit">
                    Sign In
                  </button>
                  <p>
                    Don't have an account?{" "}
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
