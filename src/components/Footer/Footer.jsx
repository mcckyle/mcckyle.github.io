//Filename: Footer.jsx
//Author: Kyle McColgan
//Date: 28 April 2026
//Description: This file contains the Footer component for the personal React project.

import React from "react";
import "./Footer.css";

function Footer()
{
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <p className="footer-message">
            Designed in Saint Louis by Kyle McColgan.
          </p>

          <p className="footer-dedication">
            Dedicated to the friends and family who made the journey possible.
          </p>

          <p className="footer-credit">
            © {year} Kyle McColgan
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
