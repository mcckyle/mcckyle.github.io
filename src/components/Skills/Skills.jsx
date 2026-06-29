//Filename: Skills.jsx
//Author: Kyle McColgan
//Date: 29 June 2026
//Description: This file contains the Skills component for the personal React project.

import React from "react";
import "./Skills.css";

function Skills()
{
  const skills = [
    {
      title: "Application Development",
      description:
        "Designing scalable applications with modular architecture using Java, React, and Spring Boot ecosystems.",
    },
    {
      title: "Frontend Engineering",
      description:
        "Creating accessible interfaces with modern JavaScript and maintainable React component design.",
    },
    {
      title: "Backend & Systems",
      description:
        "Building reliable backend services and system-level software using Java and C++.",
    },
    {
      title: "Information Security",
      description:
        "Applying secure development practices and threat mitigation principles throughout the software lifecycle to protect system confidentiality and availability.",
    },
  ];

  return (
    <>
      <header className="section-header">
        <h2 id="skills-title">
          Skills
        </h2>

        <p className="section-intro">
          Core technical disciplines I work in most often.
        </p>
      </header>

      <ul
        className="content-grid"
        role="list"
        aria-labelledby="skills-title"
      >
        {skills.map((skill) => (
          <li key={skill.title} className="skill surface-card">
            <h3 className="content-title">{skill.title}</h3>
            <p className="content-description">{skill.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Skills;
