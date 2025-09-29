//Filename: Skills.jsx
//Author: Kyle McColgan
//Date: 29 September 2025
//Description: This file contains the component for the personal React project skills section.

import React from 'react';
import './Skills.css';

function Skills()
{
    return (
        <section
          id="skills"
          className="section"
          aria-labelledby="skills-title"
        >
          <div className="skills-container">
              <h2 id="skills-title" className="skills-title">Skills</h2>
              <ul className="skills-list">
                  <li className="skills-item">
                      <h3 className="skills-subtitle">Application Development:</h3>
                      <p>
                        Proficient in Java and JavaScript, using them to build scalable web apps with clean architecture. Experienced with React on the front end and Spring Boot on the backend to deliver responsive, full-stack solutions.
                      </p>
                  </li>
                  <li className="skills-item">
                      <h3 className="skills-subtitle">Frontend Engineering:</h3>
                      <p>
                        Skilled in HTML, CSS, and modern JavaScript. I use React to create intuitive, accessible user interfaces and incorporate libraries like Bootstrap and Material-UI to accelerate design implementation.
                      </p>
                  </li>
                  <li className="skills-item">
                      <h3 className="skills-subtitle">Backend & Systems:</h3>
                      <p>
                        Comfortable working with Java, C++, and Python for backend development and systems programming. I focus on writing efficient, secure, and well-documented code for maintainability and performance.
                      </p>
                  </li>
                  <li className="skills-item">
                      <h3 className="skills-subtitle">Information Security:</h3>
                      <p>
                        Solid understanding of secure coding practices, data protection, and threat mitigation. Actively applying these principles in personal projects to reinforce privacy, integrity, and robust application design.
                      </p>
                  </li>
              </ul>
          </div>
        </section>
    );
}

export default Skills;
