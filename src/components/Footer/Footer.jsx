//Filename: Footer.jsx
//Author: Kyle McColgan
//Date: 31 October 2025
//Description: This file contains the component implementation for the React personal project footer section.

import React from 'react';
import './Footer.css';

function Footer()
{
  const year = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Site Footer">
      <div className="footer-container">
        <p className="footer-message">
          Grateful for the journey and the growth this November 🦃🍂
        </p>
        <p className="footer-credit">
          © {year} <strong>Kyle McColgan</strong> · Saint&nbsp;Louis
        </p>
      </div>
    </footer>
  );
}

export default Footer;
