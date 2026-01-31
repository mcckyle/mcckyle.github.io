//Filename: Header.jsx
//Author: Kyle McColgan
//Date: 27 January 2026
//Description: This file contains the Header component for the personal React project.

import React from "react";
import profilePic from "/images/kdm-ocean-01.png";

import "./Header.css";

function Header()
{
    return (
      <header className="site-header" role="banner">
        <div className="header-content">
          <figure className="header-image-wrapper">
            <img
              className="header-img"
              src={profilePic}
              alt="Portrait of Kyle D. McColgan"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className="header-text">
            <h1 className="header-name">Kyle D. McColgan</h1>
            <p className="header-role">Technology Professional</p>
          </div>
        </div>
      </header>
    );
}

export default Header;
