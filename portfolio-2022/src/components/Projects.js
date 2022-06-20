import React from "react";
import "../styles/Projects.css";

import illustr from "../assets/img/a.jpg";

const Projects = () => {
  return (
    <div id="projects">
      <h2>Projets</h2><br /><br />
      <div id="cards">
        <div class="card">
          <img src={illustr} alt="Avatar" />
          <span class="tag tag-teal">HTML</span>
          <span class="tag tag-purple">CSS</span>
          <span class="tag tag-pink">JavaScript</span>
          <div class="container">
            <h4>
              <b>Projet 1</b>
            </h4>
            <p>texte</p>
          </div>
        </div>
        <div class="card">
          <img src={illustr} alt="Avatar" />
          <div class="container">
            <h4>
              <b>Projet 2</b>
            </h4>
            <p>texte</p>
          </div>
        </div>
        <div class="card">
          <img src={illustr} alt="Avatar" />
          <div class="container">
            <h4>
              <b>Projet 3</b>
            </h4>
            <p>texte</p>
          </div>
        </div>
        <div class="card">
          <img src={illustr} alt="Avatar" />
          <div class="container">
            <h4>
              <b>Projet 4</b>
            </h4>
            <p>texte</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
