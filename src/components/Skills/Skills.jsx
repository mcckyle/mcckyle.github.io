//Filename: Skills.jsx
//Author: Kyle McColgan
//Date: 26 February 2026
//Description: This file contains the Skills component for the React personal project.

import React from "react";
import "./Skills.css";

function Skills()
{
  const skills = [
    {
      title: "Application Development",
      description:
        "Designing scalable web applications with modular architecture using Java, React, and Spring Boot.",
    },
    {
      title: "Frontend Engineering",
      description:
        "Creating accessible, intuitive interfaces with modern JavaScript and maintainable React component design.",
    },
    {
      title: "Backend & Systems",
      description:
        "Building performant backend services and system-level software in Java and C++.",
    },
    {
      title: "Information Security",
      description:
        "Applying secure coding practices and threat mitigation principles to protect data integrity and privacy.",
    },
  ];

  return (
    <>
      <h2 id="skills-title" className="section-title">
        Skills
      </h2>

      <p className="section-intro">
        Core technical disciplines I work in most often.
      </p>

      <ul
        className="skills-grid"
        role="list"
        aria-labelledby="skills-title"
      >
        {skills.map((skill, index) => (
          <li key={index} className="skill card">
            <h3 className="skill-title">{skill.title}</h3>
            <p className="skill-description">{skill.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Skills;
