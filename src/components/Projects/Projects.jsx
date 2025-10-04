//Filename: Projects.jsx
//Author: Kyle McColgan
//Date: 3 October 2025
//Description: This file contains the component for the personal React project projects section.

import React from "react";
import "./Projects.css";

function Projects()
{
    const projects = [
      {
        title: "Automated Snapshot Management Script",
        description:
          "A Bash script designed to automate the storage of system snapshots using Snapper. Enhances system reliability by creating and managing snapshots efficiently. Includes automated transfer to a local host storage, ensuring minimal disk usage while maintaining version history.",
        tech: ["Bash", "Linux", "Snapper"],
      },
      {
        title: "ShowMeTasks",
        description:
          "A full-stack to-do list application built with Java, React, and Spring Boot. Provides a streamlined experience for task management with responsive design, robust backend logic, and secure RESTful APIs. Emphasizes clean architecture and scalability.",
        tech: ["Java", "React", "Spring Boot", "MySQL"],
      },
    ];

    return (
        <section id="projects" aria-labelledby="projects-title" className="section">
          <h2 id="projects-title" className="section-title">
            Projects
          </h2>
          <ul className="projects-list">
            {projects.map((project, index) => (
              <li key={index} className="card project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
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
       </section>
    );
}

export default Projects;
