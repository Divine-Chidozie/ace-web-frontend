import React from "react";
import "./ContactSection.css"

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact-section">
      <div className="contact-header">
        <h2>Let's Work Together</h2>
        <p>Ready to take your digital presence to the next level? Get in touch and let's discuss your project.</p>
      </div>

      <div className="contact-content">
        {/* Left Side */}
        <div className="contact-left">
          <h3>Get In Touch</h3>
          <div className="contact-info">
            <div className="info-item">
                <ion-icon className="icon" name="mail-outline"></ion-icon>
              <p> <a href="mailto:acedigitalco101@gmail.com">acedigitalco101@gmail.com</a></p>
            </div>
            <div className="info-item">
                <ion-icon className="icon" name="call-outline"></ion-icon>
              <p> <a href="tel:+234 913 784 7640">+234 913 784 7640</a> <br /> <a href="tel:0903 012 8249 ">0903 012 8249 </a> </p>
            </div>
            <div className="info-item">
                <ion-icon className="icon" name="location-outline"></ion-icon>
              <p>Abuja, Nigeria</p>
            </div>
          </div>

          <div className="why-choose">
            <h4>Why Choose Us?</h4>
            <ul>
              <li>Expert team with 10+ years experience</li>
              <li>Proven track record of success</li>
              <li>24/7 support and maintenance</li>
              <li>Competitive pricing and flexible packages</li>
            </ul>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="contact-form">
          <form action="/contact-us" method="POST">
            <div className="form-row">
              <input type="text" name="contactName" placeholder="Your Name" required />
              <input type="email" name="contactEmail" placeholder="Email Address" required />
            </div>
            <select name="contactSelect" title="Select Service" required>
              <option value="">Select a service</option>
              <option value="social">Social Media Management</option>
              <option value="web">Web Development</option>
              <option value="branding">Branding</option>
              <option value="content">Content Creation</option>
              <option value="seo">SEO Optimization</option>
            </select>
            <textarea placeholder="Tell us about your project..." name="contactBody" rows="5" required></textarea>
            <button type="submit"><ion-icon name="send-outline"></ion-icon> Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
