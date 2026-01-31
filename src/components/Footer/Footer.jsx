//Filename: Footer.jsx
//Author: Kyle McColgan
//Date: 27 January 2026
//Description: This file contains the Footer component for the personal React project.

import React from "react";
import "./Footer.css";

function Footer()
{
  const year = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Site Footer">
      <p className="footer-message">
        Grounded in gratitude this February ♥
      </p>

      <p className="footer-credit">
        © {year} Designed in Saint&nbsp;Louis by <strong>Kyle McColgan</strong>
      </p>
    </footer>
  );
}

export default Footer;
