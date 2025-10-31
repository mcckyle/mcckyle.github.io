//Filename: Projects.jsx
//Author: Kyle McColgan
//Date: 28 October 2025
//Description: This file contains the component for the personal React project projects section.

import React from "react";
import "./Projects.css";

function Projects()
{
    const projects = [
      {
        title: "Automated Snapshot Management Script",
        description:
          "A Bash script that automates system snapshot storage with Snapper. Enhances reliability by managing snapshots efficiently and transferring them to local storage to conserve disk space while maintaining version history.",
        tech: ["Bash", "Linux", "Snapper"],
      },
      {
        title: "ShowMeTasks",
        description:
          "A full-stack to-do list application built with Java, React, and Spring Boot. Offers a seamless task management experience with responsive design, robust backend logic, and secure RESTful APIs.",
        tech: ["Java", "React", "Spring Boot", "MySQL"],
      },
    ];

    return (
        <div id="projects" role="region" aria-labelledby="projects-title" className="section-content">
          <h2 id="projects-title" className="section-title">Projects</h2>
          <ul className="projects-list">
            {projects.map((project, index) => (
              <li key={index} className="card">
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
       </div>
    );
}

export default Projects;
