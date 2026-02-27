//Filename: AboutMe.jsx
//Author: Kyle McColgan
//Date: 26 February 2026
//Description: This file contains the AboutMe component for the React personal project.

import React from 'react';

function AboutMe()
{
    return (
      <>
        <h2 id="about-title" className="section-title">
          About
        </h2>

        <div
          className="section-text"
          role="region"
          aria-labelledby="about-title"
        >
          <p className="section-lead">
            I'm Kyle McColgan, a technology professional based in Saint Louis, Missouri.
          </p>

          <p>
            My work spans full-stack development and information security,
            grounded in thoughtful design and practical, real-world impact.
          </p>

          <p>
            Outside of work, I spend time in nature, explore mystery audiobooks, attend live music events, and contribute where I can through community service.
          </p>

          <p>
            I'm drawn to meaningful problems and well-crafted solutions - and I'm always learning something new.
          </p>
        </div>
      </>
    );
}

export default AboutMe;
