import React from "react";
import "../styles/Experience.css";
import lbp from "../assets/img/labanquepostale.png";
import davelopweb from "../assets/img/davelopweb.jpeg";
import uniscite from "../assets/img/UnisCite.jpg";

const Experience = () => {
  return (
    <div id="experiences">
      <h2>Expériences</h2>
      <div id="divcardsexp">
        <div className="cardexp">
          <div>
            <img src={lbp} alt="lbp" />
          </div>
          <div className="contain">
            <h3>Gestionnaire Documentaire Bancaire</h3>
            <p>La Banque Postale · Intérimaire</p>
            <p>juin 2021 - août 2021 · 3 mois</p>
            <p>Eysines, Nouvelle-Aquitaine, France</p>
            <p>• Extraction des dossiers des rayonnages</p>
            <p>
              • Numérisation, indexation des pièces d'idendités et reclassement
              des pièces
            </p>
          </div>
        </div>
        <div className="cardexp">
          <div>
            <img src={davelopweb} alt="davelopweb" />
          </div>
          <div className="contain">
            <h3>Développeur web</h3>
            <p>Davelopweb · Stage</p>
            <p>janv. 2021 - févr. 2021 · 2 mois</p>
            <p>Bordeaux, Nouvelle-Aquitaine, France</p>
            <p>
              • Exploiter des données SQL d’un CRM pour en extraire des
              statistiques
            </p>
          </div>
        </div>
        <div className="cardexp">
          <div>
            <img src={uniscite} alt="uniscite" />
          </div>
          <div className="contain">
            <h3>Volontaire - Lutte contre la fracture numérique</h3>
            <p>Unis-Cité · Service Civique</p>
            <p>janv. 2019 - juil. 2019 · 7 mois</p>
            <p>Arcachon, Nouvelle-Aquitaine, France</p>
            <p>• Mise en place et animation d'ateliers à la bibliothèque</p>
            <p>• Déplacements à domicile pour problèmes techniques</p>
          </div>
        </div>
        <div className="cardexp">
          <div>
            <img src={lbp} alt="lbp" />
          </div>
          <div className="contain">
            <h3>Gestionnaire du service clients</h3>
            <p>La Banque Postale · CDD</p>
            <p>juil. 2018 - août 2018 · 2 mois</p>
            <p>Bordeaux, Nouvelle-Aquitaine, France</p>
            <p>
              • Traitement des demandes clients (enveloppes, duplicatas, ...)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
