import React from "react";
import "../styles/Projects.css";
import illustr from "../assets/img/a.jpg";
import nasa from '../assets/img/projetnasa.webp';
import imdb from '../assets/img/imdb.jpg';


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
              <a href="https://mozkitozz.github.io/portfolio-2022/" class="button link" target="_blank" rel="noopener noreferrer">
                Link
              </a>
              <a
                href="https://github.com/mozkitozz/portfolio-2022"
                class="button code"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <div class="card">
          <img src={imdb} alt="illustr" />
          <span class="tag tag-teal">React</span>
          <span class="tag tag-purple">Tailwind</span>
          <div class="container">
            <h4>
              <b>IMDb Tailwind</b>
            </h4>
            <p>texte</p>
            <div id="buttons">
              <a href="https://mozkitozz.github.io/tailwind-intro" class="button link" target="_blank" rel="noopener noreferrer">
                Link
              </a>
              <a href="https://github.com/mozkitozz/tailwind-intro/" class="button code" target="_blank" rel="noopener noreferrer">
                Code
              </a>
            </div>
          </div>
        </div>
        <div class="card">
          <img src={nasa} alt="illustr" />
          <span class="tag tag-teal">HTML</span>
          <span class="tag tag-purple">CSS</span>
          <div class="container">
            <h4>
              <b>Nasa Clone</b>
            </h4>
            <p>texte</p>
            <div id="buttons">
              <a href="https://mozkitozz.github.io/nasa-home/" class="button link" target="_blank" rel="noopener noreferrer">
                Link
              </a>
              <a href="https://github.com/mozkitozz/nasa-home" class="button code" target="_blank" rel="noopener noreferrer">
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
              <a href="/#" class="button link" target="_blank">
                Link
              </a>
              <a href="/#" class="button code" target="_blank">
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
