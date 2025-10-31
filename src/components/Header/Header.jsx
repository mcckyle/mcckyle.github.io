//Filename: Header.jsx
//Author: Kyle McColgan
//Date: 26 October 2025
//Description: This file contains the component for the personal React project header section.

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
              alt="Kyle on a boat by the beach."
              loading="lazy"
              decoding="async"
            />
            <figcaption className="visually-hidden">
              Portrait of Kyle D. McColgan on a boat by the beach.
            </figcaption>
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
