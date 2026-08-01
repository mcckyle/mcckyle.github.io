//Filename: Skills.jsx
//Author: Kyle McColgan
//Date: 26 July 2026
//Description: This file contains the Skills component for the personal React project.

import React from "react";
import "./Skills.css";

const SKILLS = Object.freeze([
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
]);

function Skills()
{
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
        className="content-grid skills-grid"
        role="list"
        aria-labelledby="skills-title"
      >
        {SKILLS.map((skill) => (
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
