import React from "react";
import "./Navbar.css";
import logo from "./logo.png";

function Navbar() {
  return (
    <>
      <div class="hero">
        <nav>
          <img src={logo} class="logo" />
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <a href="#" class="btn">
            Schedule a Session!
          </a>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
