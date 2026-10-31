//Filename: Skills.jsx
//Author: Kyle McColgan
//Date: 31 October 2026
//Description: This file contains the Skills component for the personal React project.

import React from "react";
import "./Skills.css";

const SKILLS = Object.freeze([
  {
    title: "Application Development",
    description:
      "Developing maintainable applications using Java, React, and Spring Boot with an emphasis on modular architecture and practical solutions.",
  },
  {
    title: "Frontend Engineering",
    description:
      "Building responsive, accessible interfaces with modern JavaScript and React.",
  },
  {
    title: "Backend & Systems",
    description:
      "Developing backend services and system-level software using Java, C++, REST APIs, and relational databases.",
  },
  {
    title: "Information Security",
    description:
      "Applying secure development practices and defense-in-depth principles to protect systems and data.",
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
        aria-labelledby="skills-title"
      >
        {SKILLS.map((skill) => (
          <li key={skill.title}>
            <article className="skill surface-card">
              <h3 className="content-title">{skill.title}</h3>
              <p className="content-description">{skill.description}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Skills;
