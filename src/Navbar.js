import React, { useState } from "react";
import "./NavbarStyles.css";
import { NavLink } from "react-router-dom";
import Logo from "./Images/logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((State) => !State);
  };
  return (
    <nav className="navbar">
      <img src={Logo} alt="logo" className="logo" />
      <div>
        <ul
          id="navItems"
          className={isOpen ? "#navItems active" : "navItems"}
          onClick={handleClick}
        >
          <li>
            <NavLink to="/" activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName ='active'>About</NavLink>
          </li>
          <li>
            <NavLink to="/courses" activeClassName='active'>Courses</NavLink>
          </li>
          <li>
            <NavLink to="/events" activeClassName='active'>Events</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName='active'>Contact</NavLink>
          </li>
        </ul>
      </div>
      <div id="mobile" onClick={handleClick}>
        <i id="menu" className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
};
export default Navbar;
