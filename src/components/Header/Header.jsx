//Filename: Header.jsx
//Author: Kyle McColgan
//Date: 26 March 2026
//Description: This file contains the Header component for the personal React project.

import React from "react";
import profilePic from "/images/kdm-ocean-01.png";

import "./Header.css";

function Header()
{
  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <img
          className="header-avatar"
          src={profilePic}
          alt="Portrait of Kyle D. McColgan"
          width="160"
          height="160"
          loading="eager"
          decoding="async"
        />

        <div className="header-intro">
          <h1 className="header-title">Kyle D. McColgan</h1>
          <p className="header-tagline">
            Building simple, modern technology.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
