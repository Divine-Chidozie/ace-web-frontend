import React, { useState } from "react";
import "./CategoryPackages.css";
import ServicePage from "../pages/ServicePage";
import Wrapper from "../images/OfferWrapper.webp";
import MakeOfferSection from "./MakeOfferSection";
import RightSideForm from "./RightSideForm.jsx";

const CategoryPackages = ({ categories }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState(null); // store clicked package
  const handlePackageClick = (pkg) => {
    setSelectedPackage(pkg); // open modal with selected package
  };

  const closeModal = () => {
    setSelectedPackage(null);
  };

  return (
    <>
      <section className="services-section fade-up ">
        <div className="overlay"></div>
        <div className="content">
          <h2 className="section-title">WE ARE 100% COMMITED TO DELIVERING THE BEST SERVICE FOR YOUR BUSINESS</h2>

          {/* Service Cards */}
          <div className="services-grid">
            {categories.map((cat, index) => (
              <div
                key={index}
                className={`service-card ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => {
                  setActiveIndex(index);
                  document.querySelector(".packages-container").scrollIntoView();
                }}
              >
                <img src={cat.icon} alt={cat.name} className="service-icon" />
                <p>{cat.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <div className="packages-container fade-up">
        {activeIndex !== null && (
          <h3 className="category-heading">{categories[activeIndex].name}</h3>
        )}

        <section className="packages-section">
          {categories[activeIndex].packages.map((pkg, pkgIndex) => (
            <div
              key={pkgIndex}
              className="package-card"
              onClick={() => handlePackageClick(pkg)} // open modal
            >
              <h4>{pkg.title}</h4>
              <h5>{pkg.price}</h5>
              <ul>
                {Array.isArray(pkg.description) ? (
                  pkg.description.map((desc, descIndex) => (
                    <li key={descIndex}>{desc}</li>
                  ))
                ) : (
                  <li>{pkg.description}</li>
                )}
              </ul>
            </div>
          ))}
        </section>
      </div>

      {/* Modal Form */}
      {selectedPackage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-contents" onClick={(e) => e.stopPropagation()}>
            <h2>
              You are about to order{" "}
              <span style={{ color: "blue" }}>{selectedPackage.title}</span> for{" "}
              <span style={{ color: "var(--primary-color)" }}>
                {categories[activeIndex]?.name}
              </span>
            </h2>

            {/* Use RightSideForm */}
            <RightSideForm selectedPackage={selectedPackage} category={categories[activeIndex]?.name} />

            <span className="close-icon" onClick={closeModal}>
              &times;
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryPackages;
