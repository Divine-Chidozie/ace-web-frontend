import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Column 1: Ace Digital Co */}
        <div className={styles.column}>
          <h3>Ace Digital Co</h3>
          <p>We create digital experiences that drive growth and engagement for businesses of all sizes.</p>
          <p className={styles.contactInfo}>
            <span role="img" aria-label="email"><ion-icon name="mail-outline"></ion-icon></span> acedigitalco101@gmail.com
          </p>
          <p className={styles.contactInfo}>
            <span role="img" aria-label="phone"><ion-icon name="call-outline"></ion-icon></span> +234 913 784 7640, <br /> 0903 012 8249  

          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className={styles.column}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/services">Services</Link></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="/careers">Careers</a></li>
            <li><Link to="/contact-us">Contact</Link></li>
            <li><a href="/blog">Blog</a></li>
            <li><Link to="/bootcamp">Coding Bootcamp</Link></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className={styles.column}>
          <h4>Services</h4>
          <ul>
            <li><Link to="/services">Social Media Management</Link></li>
            <li><Link to="/services">Landing Pages</Link></li>
            <li><Link to="/services">Web Applications</Link></li>
            <li><Link to="/services">Digital Strategy</Link></li>
          </ul>
        </div>

        {/* Column 4: Follow Us */}
        <div className={styles.column}>
          <h4>Follow Us</h4>
          <p>Stay updated with our latest projects and insights.</p>
          <div className={styles.socialLinks}>
            <a href="https://www.facebook.com/share/15ym2TV5AA/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="https://x.com/acedigitalco?s=21 " target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="https://www.instagram.com/acedigitalco_agency?igsh=amlreGExOTFrOWQ1 " target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="https://www.linkedin.com/company/ace-digital-co/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className={styles.footerBottom}>
        <p>&copy; 2025 Ace Digital Co. All rights reserved.</p>
        <div className={styles.legalLinks}>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of service</Link>
          <a href="#cookie">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;