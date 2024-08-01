
import React from 'react';
import './Footer.style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>PRODUCTS</h3>
        <ul>
          <li>Gi's</li>
          <li>Gloves</li>
          <li>Equipment</li>
          <li>Protection</li>
          <li>Apparel</li>
          <li>Trainers</li>
          <li>Bags</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>EXPLORE</h3>
        <ul>
          <li>Wholesale</li>
          <li>Ambassadors</li>
          <li>About CC</li>
          <li>Careers</li>
          <li>Pro Team</li>
          <li>Free Offers</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>SUPPORT</h3>
        <ul>
          <li>FAQs</li>
          <li>Shipping</li>
          <li>Returns</li>
          <li>My Account</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>CONNECT</h3>
        <ul className="social-links">
          <li><i className="fab fa-instagram"></i></li>
          <li><i className="fab fa-facebook"></i></li>
          <li><i className="fab fa-youtube"></i></li>
          <li><i className="fab fa-linkedin"></i></li>
        </ul>
        <ul className="contact-links">
          <li>Call Us</li>
          <li>Email Us</li>
        </ul>
      </div>
      <div className="footer-copyright">
        <p>Copyright 2024 Combat Corner. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
