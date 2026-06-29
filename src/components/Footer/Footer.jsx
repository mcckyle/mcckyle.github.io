//Filename: Footer.jsx
//Author: Kyle McColgan
//Date: 18 June 2026
//Description: This file contains the Footer component for the personal React project.

import React from "react";
import "./Footer.css";

function Footer()
{
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <p className="footer-message">
            Designed and developed in Saint Louis by Kyle McColgan.
          </p>

          <p className="footer-dedication">
            Dedicated to the friends and family who made this journey possible.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
