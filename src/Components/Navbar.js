import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Logo
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/animals">Animal Data</Link>
          </li>
          <li>
            <Link to="/register">Registter</Link>
          </li>
          <li>
            <Link to="/SignIn">Sign In</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
