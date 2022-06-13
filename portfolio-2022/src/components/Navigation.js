import React from "react";
import '../styles/Navigation.css'
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
