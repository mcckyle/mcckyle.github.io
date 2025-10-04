//Filename: Skills.jsx
//Author: Kyle McColgan
//Date: 3 October 2025
//Description: This file contains the component for the personal React project skills section.

import React from "react";
import "./Skills.css";

function Skills()
{
  const skills = [
    {
      title: "Application Development",
      description:
        "Proficient in Java and JavaScript, building scalable web apps with clean architecture. Experienced with React on the front end and Spring Boot on the backend to deliver responsive full-stack solutions.",
    },
    {
      title: "Frontend Engineering",
      description:
        "Skilled in HTML, CSS, and modern JavaScript. I use React to create intuitive, accessible UIs and incorporate libraries like Bootstrap and Material-UI to accelerate design implementation.",
    },
    {
      title: "Backend & Systems",
      description:
        "Comfortable working with Java, C++, and Python for backend development and systems programming. I focus on writing efficient, secure, and well-documented code for maintainability and performance.",
    },
    {
      title: "Information Security",
      description:
        "Solid understanding of secure coding practices, data protection, and threat mitigation. Actively applying these principles in personal projects to reinforce privacy, integrity, and robust application design.",
    },
  ];

  return (
    <section id="skills" aria-labelledby="skills-title" className="section">
      <h2 id="skills-title" className="section-title">
        Skills
      </h2>
      <ul className="skills-list">
      {skills.map((skill, index) => (
        <li key={index} className="card skills-card">
          <h3 className="skills-subtitle">{skill.title}</h3>
          <p>{skill.description}</p>
        </li>
      ))}
      </ul>
    </section>
  );
}

export default Skills;
