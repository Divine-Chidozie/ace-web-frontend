import React from "react";
import "./MakeOfferSection.css";
import { Link } from "react-router-dom";

function MakeOfferSection() {
  return (
    <>
    <Link to="../contactUs" smooth={true} duration={500} offset={-70}>
    <section className="make-offer-section">
      <div className="make-offer-content">
        <span className="make-offer-text">Make Us An Offer</span>
        <span className="make-offer-arrow">→</span>
      </div>
    </section>
    </Link>
    </>
  );
}

export default MakeOfferSection;
