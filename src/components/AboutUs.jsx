import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Diamonds from "./Diamond";
import Staff from "../components/Staff";
import "./AboutUsMedia.css";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

const AboutUs = () => {
  
  const [navbarBg, setNavbarBg] = useState(
    "linear-gradient(to right, #000025, #1e2a45, #2e6da8)"
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setNavbarBg("linear-gradient(to right, #000025, #1e2a45, #2e6da8)");
      } else {
        setNavbarBg("#000025");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="container bg-light">
        <Navbar style={{ background: navbarBg, transition: "0.3s ease" }} />
        <section className="m-5">
          {/* =============== TEAM OF CREATORS SECTION =============== */}
          <section className="" style={{ paddingTop: "100px" }}>
            {/* Animate the main heading from LEFT */}
            <div className="d-flex justify-content-center align-items-center meet-container">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="p-5 fs-1 heading" style={{ color: "#212529" }}>
                  Meet our team of creators, designers, and world-class problem
                  solvers
                </h1>
              </motion.div>

              {/* Animate Diamonds component from the Top */}
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 50,
                  damping: 5,
                }}
              >
                <Diamonds />
              </motion.div>
            </div>
          </section>

          {/* =================== OUR MISSION SECTION =================== */}
          <section className="mx-4 mt-4">
            <div className="mission-container">
              {/* Animate "Our Mission" heading from LEFT */}
              <motion.h3
                className="text-center py-3 fs-2 mission-heading"
                style={{ color: "#212529" }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                Our Mission
              </motion.h3>

              <div
                className="d-grid gap-3 mt-3 "
                // style={{ gridTemplateColumns: "1fr 1fr" }}
              >
                {/* Animate "WE DO THIS for one reason" heading from LEFT */}
                <motion.div
                  className="d-flex justify-content-center align-items-center"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="we-do-this-container ">
                    <h4 className="fs-5 text-center">
                      WE DO THIS
                      <p className="fs-3 ">for one reason</p>
                    </h4>
                  </div>
                </motion.div>

                {/* Animate paragraph from LEFT with small delay */}
                <div className="mission-paragrapgh-container flex justify-items-center align-items-center">
                  <motion.p
                    className="text-center m-auto w-75 mission-paragrapgh"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    At Ace Digital Co. we're on a mission to empower business to
                    thrive in the digital age. We believe in crafting
                    exceptional online experience and data-driven strategies
                    that connect brands with their audience, ignite growth, and
                    deliver measurable result. We are your partner in navigating
                    the digital landscape, turning your vision into a powerful
                    online presence.
                  </motion.p>
                </div>
              </div>
            </div>
          </section>

          {/* =================== OUR STORY SECTION =================== */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-5 my-3 d-flex justify-content-center align-items-center flex-column our-story-container">
              <h2
                className="text-center py-3 fs-2 our-story-heading"
                style={{ color: "#212529" }}
              >
                Our Story
              </h2>
              <p className="text-center w-75 our-story-paragrapgh">
                Founded with a passion for innovation and a deep understanding
                of the ever-evolving digital world. Ace Digital Co was born to
                fill the gap in the market. We saw business struggling to keep
                up with the pace of technology and wanted to provide a service
                that was not only effective but also transparent and
                collaborative.From our humble beginnings, we have grown into a
                full-service digital marketing agency, helping a diverse range
                of client achieve their goals.
              </p>
            </div>
          </motion.section>

          {/* MEET THE TEAM SECTION */}
          <section>
            <Staff />
          </section>
        </section>

        {/* ABOUT US FOOTER      */}
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
