import React, { useState } from 'react';
import './NavbarStyles.css';
import Logo from './Images/logo.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((State) => !State);
  };
  return (
    <nav className="navbar">
      <img src={Logo} alt="logo" className="logo" />
      <div>
        <ul id="navItems" className={isOpen ?"#navItems active" :"navItems"}>
          <li>
            <a className="active" href="index.html">
              Home
            </a>
          </li>
          <li>
            <a href="index.html">About</a>
          </li>
          <li>
            <a href="index.html">Courses</a>
          </li>
          <li>
            <a href="index.html">Events</a>
          </li>
          <li>
            <a href="index.html">Contact</a>
          </li>
        </ul>
      </div>
      <div id="mobile" onClick={handleClick}>
  <i id="menu" className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
</div>
    </nav>
  );
};
export default Navbar;

