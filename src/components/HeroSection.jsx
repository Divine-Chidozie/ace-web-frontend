import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function HeroSection({ children, shouldAnimate = false }) {
  const fullText =
    "Explore The Better And Smarter Approach To Boost Your Brand";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const type = () => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
        setTimeout(type, 90);
      }
    };
    type();
  }, [fullText]);

  useEffect(() => {
    if (!shouldAnimate) return;
    if (window.VANTA && window.VANTA.HALO) {
      window.VANTA.HALO({
        el: "#vanta-hero-background",
       baseColor: 0x090c1b,    
        backgroundColor: 0x000025,
        size: 2.5,
        amplitudeFactor: 2.0,
        xOffset: 0.28,
        yOffset: 0.28,
        mouseControls: true,
        touchControls: true,
        highlightColor: 0x9aa9ff,
        midtoneColor: 0x616fb5,
        lowlightColor: 0x3c446b,
        width: 500.0,
        height: 600.0,
        scale: 1.00,
        scaleMobile: 1.00
      });
    }
  }, [shouldAnimate]);
  
  let elements = (
    <>
      <motion.h1
        className="hero_title text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        {displayedText}
      </motion.h1>

      <motion.p
        className="hero_description"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        At Ace Digital Co., we blend creative strategy with modern technology to
        help brands grow, attract quality leads, and increase sales. From social
        media campaigns to conversion-focused websites, we build digital
        experiences that deliver measurable results
      </motion.p>

      <motion.div
        className="button"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <a href="/services" className="btn primary_button">
          Work With Us
        </a>
        <a href="/portfolio" className="btn secondary_button">
          View Portfolio
        </a>
      </motion.div>
    </>
  );

  if (children) elements = children;

  return (
    <div id="vanta-hero-background">
      <div className="container">
        <section className="hero_section fade-up" id="home">
          {elements}
        </section>
      </div>
    </div>
  );
}

export default HeroSection;
