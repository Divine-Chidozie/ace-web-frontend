import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import client1 from "../images/Testimonials Clients/client_6.webp";
import client2 from "../images/Testimonials Clients/client1.webp";
import client3 from "../images/Testimonials Clients/client5.webp";
import client4 from "../images/Testimonials Clients/client_2.webp";



const testimonials = [
  {
    id: 1,  
    image: client1,
    text: "Ace Digital transformed our social media presence! Their team expertly crafted a brand-building strategy that resonated with our audience, resulting in a 300% increase in followers and a 50% boost in sales.",
    name: "John Doe",
    role: "CEO of XYZ Enterprises",
  },
  {
    id: 2,
    image: client2,
    text: "We were struggling to get our Google Ads to convert. Ace Digital's team optimized our campaigns, and we're now seeing a 200% return on ad spend. Their expertise has been invaluable to our business.",
    name: "Emily Lee",
    role: "Marketing Director at Bloom Beauty",
  },
  {
    id: 3,
    image: client3,
    text: "Ace Digital helped us build a strong brand identity on social media. Their content creation team produced engaging videos and posts that increased our engagement by 500%. We're thrilled with the results!",
    name: "David Kim",
    role: "Founder of Kim's Kitchen",
  },
    {
    id : 4,
    image: client4,
    text: "Ace Digital transformed our social media presence! Their team expertly crafted a brand-building strategy that resonated with our audience, resulting in a 300% increase in followers and a 50% boost in sales.",
    name: "Sarah Taylor",
    role: "Owner of Taylor's Trends",
  },
  {
    id: 5,
    image: client2,
    text: "Ace Digital's team is professional, responsive, and knowledgeable. They've helped us develop a comprehensive digital marketing strategy that drives real results. We highly recommend their services",
    name: "Michael Brown",
    role: "CMO of Brown's Business Solutions",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  // Auto switch every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5600);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[index];

  return (
    <section className="testimonial">
      <h4 className="subtitle">TESTIMONIAL</h4>
      <h2 className="title">WORDS FROM OUR CLIENTS</h2>

      <div className="testimonial-container fade">
        {/* Left image */}
        <div className="testimonial-image">
          <img src={t.image} alt="Parent and child" />
        </div>

        {/* Right content */}
        <div className="testimonial-content">
          <div className="quote">“</div>
          <p className="message">"{t.text}"</p>
          <div className="quote">“</div>
          <div className="author">
            <div>
              <h4>{t.name}</h4>
              <p>{t.role}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="testimonial-dots">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
