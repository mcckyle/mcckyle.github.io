//Filename: Header.jsx
//Author: Kyle McColgan
//Date: 2 October 2025
//Description: This file contains the React component for the personal React project header section.

import React from "react";
import profilePic from "/images/kdm-ocean-01.png";

import "./Header.css";

function Header()
{
    return (
      <header className="site-header">
        <div className="header-content">
          <div className="header-text">
            <h1 className="header-name">Kyle D. McColgan</h1>
            <h2 className="header-role">Technology Professional</h2>
          </div>

          <figure className="header-image-wrapper">
            <img
              className="header-img"
              src={profilePic}
              alt="Kyle at the beach."
              loading="lazy"
            />
            <figcaption className="visually-hidden">
              Semi-professional headshot of Kyle.
            </figcaption>
          </figure>
        </div>
      </header>
    );
}

export default Header;
