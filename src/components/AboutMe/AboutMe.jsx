//Filename: AboutMe.jsx
//Author: Kyle McColgan
//Date: 27 January 2026
//Description: This file contains the AboutMe component for the personal React project.

import React from 'react';
import './AboutMe.css';

function AboutMe()
{
    return (
      <section
        id="about-me"
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
      </section>
    );
}

export default AboutMe;
