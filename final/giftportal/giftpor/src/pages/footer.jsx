// FooterComponent.jsx

import React from 'react';
import './footer.css';

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="left-section">
          <h3>CompanyName</h3>
          <p>1234 Example St, Cityville, Country</p>
          {/* <img src="./src/images/img3-01.png" alt="erbkrb" /> */}
          

          
        </div>

        <div className="center-section">
          <p>Contact: +1 234-567-8901</p>
          <p>Email: info@companyname.com</p>
          <p>Working Hours: Mon - Fri, 9:00 AM - 5:00 PM</p>
        </div>

        <div className="right-section">
          <div className="footer-logo">
            
            <h1>ANGEL'S GIFT SHOP</h1>
          </div>

          <div className="social-media">
            <h3>Follow Us :</h3>
            {/* Add your social media links/icons */}
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"> Facebook _</a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter _</a>
            <a href="https://www.instagram.com/surprise_machi/?hl=en" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;