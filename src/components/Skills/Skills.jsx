//Filename: Skills.jsx
//Author: Kyle McColgan
//Date: 29 December 2025
//Description: This file contains the component for the personal React project skills section.

import React from "react";
import "./Skills.css";

function Skills()
{
  const skills = [
    {
      title: "Application Development",
      description:
        "Designing and building scalable web applications with clean architecture. Experienced in Java and JavaScript, using React on the frontend and Spring Boot on the backend to deliver cohesive, full-stack systems.",
    },
    {
      title: "Frontend Engineering",
      description:
        "Creating intuitive, accessible interfaces with HTML, CSS, and modern JavaScript. Focused on clarity, responsiveness, and maintainable React component design.",
    },
    {
      title: "Backend & Systems",
      description:
        "Developing efficient backend services and system-level software in Java, C++, and Python, with an emphasis on performance, security, and long-term maintainability.",
    },
    {
      title: "Information Security",
      description:
        "Applying secure coding practices and threat-mitigation principles to protect data integrity, privacy, and application reliability.",
    },
  ];

  return (
    <div
      id="skills"
      role="region"
      className="section-content skills"
      aria-labelledby="skills-title"
    >
      <h2 id="skills-title" className="section-title">
        Skills
      </h2>

      <p className="skills-intro">
        A focused overview of the technical disciplines I work in most often.
      </p>

      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skills-item">
            <h3 className="skills-subtitle">{skill.title}</h3>
            <p>{skill.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
