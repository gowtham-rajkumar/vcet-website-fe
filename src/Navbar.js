import React, { useState } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
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
        <ul id="navItems" className={isOpen ? "#navItems active" : "navItems"}>
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
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
