//Filename: Header.jsx
//Author: Kyle McColgan
//Date: 28 May 2026
//Description: This file contains the Header component for the personal React project.

import React from "react";
import profilePic from "/images/kdm-ocean-01.png";

import "./Header.css";

function Header()
{
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          <img
            className="header-avatar"
            src={profilePic}
            alt="Portrait of Kyle D. McColgan"
            width="160"
            height="160"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />

          <div className="header-intro">
            <p className="header-eyebrow">Technology Professional</p>
            <div className="header-title-group">
              <h1 className="header-title">Kyle D. McColgan</h1>
              <p className="header-tagline">
                Building simple, modern software systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
