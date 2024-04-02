import React, { useState } from "react";
import "./LoginPageStyles.css"; // Import CSS file for styling
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom";
const RegistrationPage = () => {
    const [id,setId] = useState('')
    const [firstname,setFirstame] = useState('')
    const [lastname,setLastname] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmpassword,setConfirmPassword] = useState('')
    const navigation = useNavigate();
    const API_URL= "http://localhost:3500/user"
    const handleRegister=(e)=>{
      e.preventDefault();
      let obj={id,firstname,lastname,email,password,confirmpassword}
      fetch(API_URL,{
        method:'POST',
        headers:{'content-type':'application/json'},
        body : JSON.stringify(obj)
      }).then((res) =>{
        toast.success("Registerd successfully")
        navigation('/loginPage')

      }).catch((err)=>{
        toast.error("Faild"+err.message)
      })
    }
  return (
    <>
      <div className="dep-heading">
        <h1>THE DEPARTMENT OF ELECTRONICS AND COMMUNICATION</h1>
      </div>
      <form action="" onSubmit={handleRegister}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="username">Username</label>
              </td>
              <td>
                <input
                  type="text"
                  name="username"
                  value={id}
                  onChange={e=>setId(e.target.value)}
                  id="username"
                  placeholder="Enter username (Letters and Numbers only)"
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="firstname">Firstname</label>
              </td>
              <td>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  value={firstname}
                  onChange={e=>setFirstame(e.target.value)}
                  placeholder="Enter your firstname"
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="lastname">Lastname</label>
              </td>
              <td>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  value={lastname}
                  onChange={e=>setLastname(e.target.value)}
                  placeholder="Enter your lastname"
                  required
                />
              </td>
            </tr>

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
                  onChange={e=>setEmail(e.target.value)}
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
                  onChange={e=>setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="conpassword">Confirm Password</label>
              </td>
              <td>
                <input
                  type="password"
                  name="conpassword"
                  id="conpassword"
                  value={confirmpassword}
                  onChange={e=>setConfirmPassword(e.target.value)}
                  placeholder="Enter confirm password"
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
      </form>
    </>
  );
};

export default RegistrationPage;
