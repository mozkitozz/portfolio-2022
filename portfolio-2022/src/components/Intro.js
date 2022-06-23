import React from "react";
import "../styles/Intro.css";
import profil from "../assets/img/profil.jpeg";
import hero from "../assets/img/hero.svg";

const Home = () => {
  return (
    <div id="home">
      <div id="presentation">
        <img src={profil} alt="profil" />
        <br />
        <br />
        <p style={{ fontFamily: "Allan" }}>
          Etudiant en développement web <br /> à Web@cadémie by Epitech Bordeaux
        </p>
        <br />
        <p>
          <br />
          <a href="../assets/CV.pdf" download>
            Mon CV
          </a>
        </p>
      </div>
      <div id="hero">
        <img src={hero} alt="hero" />
      </div>
    </div>
  );
};

export default Home;
