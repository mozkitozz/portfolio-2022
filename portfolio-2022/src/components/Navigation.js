import React from "react";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <div id="navigation">
      <nav>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#projects">Projets</a>
        </li>
        <li>
          <a href="#skills">Compétences</a>
        </li>
        <li>
          <a href="#experiences">Experiences</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </nav>
    </div>
  );
};

export default Navigation;
