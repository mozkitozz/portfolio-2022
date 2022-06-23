import React from "react";
import "../styles/Projects.css";
import illustr from "../assets/img/a.jpg";

const Projects = () => {
  return (
    <div id="projects">
      <h2>Projets</h2>
      <br />
      <br />
      <div id="cards">
        <div class="card">
          <img src={illustr} alt="illustr" />
          <span class="tag tag-teal">HTML</span>
          <span class="tag tag-purple">CSS</span>
          <span class="tag tag-pink">JavaScript</span>
          <div class="container">
            <h4>
              <b>Portofolio</b>
            </h4>
            <p>texte</p>
            <div id="buttons">
              <a href="" class="button link" target="_blank">
                Link
              </a>
              <a
                href="https://github.com/EpitechWebAcademiePromo2023/W-WEB-502-BDX-2-1-Portfolio-mateo.mons"
                class="button code"
                target="_blank"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <div class="card">
          <img src={illustr} alt="illustr" />
          <span class="tag tag-teal">React</span>
          <span class="tag tag-purple">Tailwind</span>
          <div class="container">
            <h4>
              <b>Projet 2</b>
            </h4>
            <p>texte</p>
            <div id="buttons">
              <a href="" class="button link" target="_blank">
                Link
              </a>
              <a href="" class="button code" target="_blank">
                Code
              </a>
            </div>
          </div>
        </div>
        <div class="card">
          <img src={illustr} alt="illustr" />
          <span class="tag tag-teal">HTML</span>
          <span class="tag tag-purple">CSS</span>
          <span class="tag tag-yellow">PHP</span>
          <div class="container">
            <h4>
              <b>Projet 3</b>
            </h4>
            <p>texte</p>
            <div id="buttons">
              <a href="" class="button link" target="_blank">
                Link
              </a>
              <a href="" class="button code" target="_blank">
                Code
              </a>
            </div>
          </div>
        </div>
        <div class="card">
          <img src={illustr} alt="illustr" />
          <div class="container">
            <h4>
              <b>Projet 4</b>
            </h4>
            <p>texte</p>
            <div id="buttons">
              <a href="" class="button link" target="_blank">
                Link
              </a>
              <a href="" class="button code" target="_blank">
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
