import React from "react";
import "../styles/Skills.css";
import html from "../assets/dev/html.svg";
import css from "../assets/dev/css.svg";
import js from "../assets/dev/js.svg";
import react from "../assets/dev/react.svg";
import tailwind from "../assets/dev/tailwind.svg";
import node from "../assets/dev/node.svg";
import laravel from "../assets/dev/laravel.svg";
import mysql from "../assets/dev/mysql.svg";
import mongodb from "../assets/dev/mongodb.svg";
import git from "../assets/dev/git.svg";
import github from "../assets/dev/github.svg";

const Skills = () => {
  return (
    <div id="skills">
      <h2>Compétences</h2>
      <div id="cards">
        <div class="card">
          <div class="container">
            <h4>
              <b>Langages</b>
            </h4>
            <p>
              HTML
              <img src={html} alt="html" />
            </p>
            <p>
              CSS <img src={css} alt="css" />
            </p>
            <p>
              JavaScript <img src={js} alt="js" />
            </p>
          </div>
        </div>
        <div class="card">
          <div class="container">
            <h4>
              <b>Frameworks</b>
            </h4>
            <p>
              React.js <img src={react} alt="react" />
            </p>
            <p>
              Node.js <img src={node} alt="node" />
            </p>
            <p>
              TailwindCSS <img src={tailwind} alt="tailwind" />
            </p>
            <p>
              Laravel <img src={laravel} alt="laravel" />
            </p>
          </div>
        </div>
        <div class="card">
          <div class="container">
            <h4>
              <b>Tools</b>
            </h4>
            <p>
              MySQL <img src={mysql} alt="mysql" />
            </p>
            <p>
              MongoDB <img src={mongodb} alt="mongodb" />
            </p>
            <p>
              Git <img src={git} alt="git" />
            </p>
            <p>
              Github <img src={github} alt="github" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
