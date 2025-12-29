//Filename: Projects.jsx
//Author: Kyle McColgan
//Date: 29 December 2025
//Description: This file contains the component for the personal React project projects section.

import React from "react";
import "./Projects.css";

function Projects()
{
    const projects = [
      {
        title: "Automated Snapshot Management Script",
        description:
          "A Bash utility that automates system snapshot management using Snapper, improving reliability while conserving disk space through intelligent snapshot rotation and offloading.",
        tech: ["Bash", "Linux", "Snapper"],
      },
      {
        title: "ShowMeTasks",
        description:
          "A full-stack task management application featuring a React frontend and Spring Boot backend, designed with clean APIs, secure data handling, and a responsive user experience.",
        tech: ["Java", "React", "Spring Boot", "MySQL"],
      },
      {
        title: "Gift Planner",
        description:
        "A full-stack gift planning application that helps organize people and gift ideas, backed by a secure REST API and a modern React interface.",
        tech: ["Java", "React", "Spring Boot", "MySQL"],
      },
      {
        title: "Gratitude Journal",
        description:
        "A journaling application focused on simplicity and reflection, combining a clean React UI with a robust Spring Boot backend for secure data persistence.",
        tech: ["Java", "React", "Spring Boot", "MySQL"],
      },
    ];

    return (
        <div
          id="projects"
          role="region"
          className="section-content projects"
          aria-labelledby="projects-title"
          >
            <h2 id="projects-title" className="section-title">
              Projects
            </h2>

            <p className="projects-intro">
              A selection of personal and technical projects focused on reliability,
              clarity, and thoughtful design.
            </p>

            <ul className="projects-list">
              {projects.map((project, index) => (
                <li key={index} className="project-item">
                  <div className="project-main">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                  </div>

                  <ul className="project-tech">
                    {project.tech.map((tech, i) => (
                      <li key={i} className="tech-tag">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
        </div>
    );
}

export default Projects;
