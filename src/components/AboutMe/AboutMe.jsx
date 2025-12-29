//Filename: AboutMe.jsx
//Author: Kyle McColgan
//Date: 29 December 2025
//Description: This file contains the component for the personal React project about section.

import React from 'react';
import './AboutMe.css';

function AboutMe()
{
    return (
      <div
        id="about-me"
        role="region"
        className="section-content about-me"
        aria-labelledby="about-title"
      >
        <h2 id="about-title" className="section-title">
          About Me
        </h2>

        <div className="about-body">
          <p className="about-lead">
            Hello! I'm <strong>Kyle McColgan</strong>, a technology professional
            based in Saint Louis, Missouri.
          </p>

          <p>
            I work primarily in full-stack web development and information
            security, with a focus on building secure, scalable solutions that are
            thoughtfully designed and grounded in real-world use.
          </p>

          <p>
            Outside of work, I enjoy spending time in nature through hiking,
            bird watching, and stargazing. I’m also an avid listener of mystery
            audiobooks, enjoy live concerts, and value opportunities to give back
            through volunteering in the community.
          </p>

          <p>
            I'm drawn to projects that are meaningful, well-crafted, and built
            with intention - and I'm always open to learning something new.
          </p>
        </div>
      </div>
    );
}

export default AboutMe;
