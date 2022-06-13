import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import '../styles/Home.css';
import logo from '../assets/profil.jpeg';


const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="presentation">
        <div className="about">
          <h2>Hi, my name is Mateo 👋</h2>
          <img src={logo} alt="logo" />
          <h3>Ce que je fais</h3>
          <p>Etudiant en développement web à Web@cadémie by Epitech Bordeaux</p>
          <a href="img/CV.pdf" download="">Mon CV</a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
