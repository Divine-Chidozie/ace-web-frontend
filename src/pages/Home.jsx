import { useEffect, useCallback } from 'react';
import Footer from "../components/Footer";
import OurWork from "../components/OurWork";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServiceSection from "../components/ServiceSection";
import Stats from "../components/Stats";
import ContactSection from "../components/ContactSection";
import ".././App.css";

function Home(){
  const handleScroll = useCallback(() => {
    if (window.scrollY > 150) {
      document.querySelector("header.nav_bar").classList.add("opaque-mode");
    } else {
      document.querySelector("header.nav_bar").classList.remove("opaque-mode");
    }
  }, []); 
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);



  return (
    <div>
      <div className="hero-background">
        <Navbar />
        <HeroSection shouldAnimate={true} />
      </div>
      <ServiceSection />
      <Stats />
      <OurWork />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Home;