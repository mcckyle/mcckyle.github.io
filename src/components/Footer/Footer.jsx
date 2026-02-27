//Filename: Footer.jsx
//Author: Kyle McColgan
//Date: 24 February 2026
//Description: This file contains the Footer component for the React personal project.

import React from "react";
import "./Footer.css";

function Footer()
{
  const year = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer-inner">
        <p className="footer-message">
          Built with intention in Saint Louis.
        </p>

        <p className="footer-dedication">
          Dedicated to the friends and family who made the journey possible.
        </p>

        <p className="footer-credit">
          © {year} Kyle McColgan
        </p>
      </div>
    </footer>
  );
}

export default Footer;
