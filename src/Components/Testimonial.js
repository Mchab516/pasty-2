import React from "react";
import ProfilePic from "../Assets/pasty.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Nos Produits</p>
        <h1 className="primary-heading">Pasty pizza</h1>
        <p className="primary-text">
        Après plusieurs mois de recherche et développement par des spécialistes italiens, nous avons mis au point 
        le premier pâton de PIZZA prêt à l'emploi. Une révolution pour les restaurateurs marocains.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        Qualité constante de la pizza
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        
      </div>
    </div>
  );
};

export default Testimonial;
