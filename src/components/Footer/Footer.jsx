//Filename: Footer.jsx
//Author: Kyle McColgan
//Date: 29 September 2025
//Description: This file contains the component for the personal React project footer section.

import React from 'react';
import './Footer.css';

function Footer()
{
    return (
        <footer className="footer" aria-label="Footer">
          <div className="footer-container">
            <p className="footer-seasonal">Welcoming the calm of September 🍂 </p>
            <p className="footer-credit">
              Designed by <strong>Kyle McColgan</strong>, 2025.
            </p>
          </div>
        </footer>
    );
}

export default Footer;
