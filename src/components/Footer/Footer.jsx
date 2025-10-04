//Filename: Footer.jsx
//Author: Kyle McColgan
//Date: 3 October 2025
//Description: This file contains the component for the personal React project footer section.

import React from 'react';
import './Footer.css';

function Footer()
{
    return (
      <footer className="footer" aria-label="Site Footer">
        <div className="footer-container">
          <p className="footer-seasonal">
            Embracing the spirit of October 🎃👻
          </p>
          <p className="footer-credit">
            © {new Date().getFullYear()} <strong>Kyle McColgan</strong> · Saint Louis
          </p>
        </div>
      </footer>
    );
}

export default Footer;
