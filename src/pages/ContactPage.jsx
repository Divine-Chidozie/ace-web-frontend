import React, { useState } from "react";
import RightSideForm from "../components/RightSideForm";
import "./ContactPage.css"; // external css
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {


  return (
    <>
      <Navbar />
      <div className="ContactSection">
        <div className="ContactContainer">
          {/* LEFT SIDE */}
          <div className="ContactInfo">
            <h2>Contact Us</h2>
            <p>
              Whether you’re
              looking to build a powerful online presence, create engaging
              digital experiences, or develop strategies that deliver measurable
              results, our team is here to guide you every step of the way.
              Get in touch with us today and let’s turn your vision into
              reality.
            </p>

            <div className="InfoBox">
              <span className="Icon">📍</span>
              <div>
                <h4>Address</h4>
                <p>Abuja, Nigeria</p>
              </div>
            </div>

            <div className="InfoBox">
              <span className="Icon">📞</span>
              <div>
                <h4>Phone</h4>
                <p>
                  {" "}
                  <a href="tel:+234 913 784 7640">
                    +234 913 784 7640,
                  </a> <br /> <a href="tel:0903 012 8249 ">0903 012 8249 </a>{" "}
                </p>
              </div>
            </div>

            <div className="InfoBox">
              <span className="Icon">✉️</span>
              <div>
                <h4>Email</h4>
                <p>
                  {" "}
                  <a href="mailto:acedigitalco101@gmail.com">
                    acedigitalco101@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <RightSideForm />
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
