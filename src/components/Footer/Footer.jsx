//Filename: Footer.jsx
//Author: Kyle McColgan
//Date: 18 December 2025
//Description: This file contains the component implementation for the React personal project footer section.

import React from "react";
import "./Footer.css";

function Footer()
{
  const year = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Site Footer">
      <p className="footer-message">
        Blessed to see another year this January ✨
      </p>

      <p className="footer-credit">
        © {year} Designed in Saint&nbsp;Louis by <strong>Kyle McColgan</strong>
      </p>
    </footer>
  );
}

export default Footer;
