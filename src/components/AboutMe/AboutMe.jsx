//Filename: AboutMe.jsx
//Author: Kyle McColgan
//Date: 2 October 2025
//Description: This file contains the component for the personal React project about section.

import React from 'react';
import './AboutMe.css';

function AboutMe()
{
    return (
      <section
        id="about-me"
        aria-labelledby="about-title"
        className="section"
      >
        <h2 id="about-title" className="section-title">
          About Me
        </h2>
        <div className="section-content">
          <p>
            Hello! My name is{" "}
            <span className="highlight">Kyle McColgan</span>. I'm a technology
            professional proudly based in Saint Louis, Missouri. I specialize in{" "}
            <span className="highlight">full-stack web development</span> and{" "}
            <span className="highlight">information security</span>, with a focus
            on building secure, scalable solutions that make a tangible,
            real-world impact.
          </p>
          <p>
            Outside of work, I can be found outside enjoying nature through hiking,
            bird watching, or stargazing with my telescope. I’m also into mystery
            audiobooks among many other genres, live concerts, and giving back to
            the community through volunteering.
          </p>
          <p>
            I enjoy working on projects that are{" "}
            <span className="highlight"> thoughtful and meaningful</span>, and I’m
            always open to learning something new. If anything here resonates,
            I’d be thrilled to connect!!
          </p>
        </div>
      </section>
    );
}

export default AboutMe;
