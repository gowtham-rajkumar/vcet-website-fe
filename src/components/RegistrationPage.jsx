import React, { useState } from "react";
import "./LoginPageStyles.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      alert("Registerd Successfully");
      toast.success("Registerd Successfully", { theme: "colored" });
      navigation("/loginpage");
    } catch (error) {
      var code = error.code;
      switch (code) {
        case "auth/email-already-in-use":
          toast.warn("Email Already In Use. Try Different One",{ theme: "colored" });
          break;
        case "auth/invalid-email":
          toast.warn("Invalid Email - Provide The Correct Email ",{ theme: "colored" });
          break;
        case "auth/weak-password":
          toast.info("Password should be at least 6 characters" ,{ theme: "colored" });
          break;
        case "auth/maximum-user-count-exceeded":
          toast.warn("Maximum User Reached - Inform To Department",{theme:'colored'})
          break;
        default:
          toast.info("Something Went Wrong")
          console.log(error.message)
      }
    }
  };
  return (
    <>
      <ToastContainer></ToastContainer>
      <div className="dep-heading">
        <h1>THE DEPARTMENT OF ELECTRONICS AND COMMUNICATION</h1>
      </div>
      <form action="" onSubmit={handleRegister}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="mail">Mail ID</label>
              </td>
              <td>
                <input
                  type="email"
                  name="mail"
                  id="mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email mail id"
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="password">Password</label>
              </td>
              <td>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </td>
            </tr>

            <tr>
              <td colSpan="2" style={{ textAlign: "center" }}>
                <button type="submit">Create Account</button>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          Have an account? <a href="/loginpage">Login here</a>
        </p>
      </form>
    </>
  );
};

export default RegistrationPage;
