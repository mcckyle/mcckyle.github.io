//Filename: Projects.jsx
//Author: Kyle McColgan
//Date: 26 February 2026
//Description: This file contains the Projects component for the React personal project.

import React from "react";
import "./Projects.css";

function Projects()
{
    const projects = [
      {
        title: "Automated Snapshot Management Script",
        description:
          "A Bash utility that automates Snapper snapshot offloading to improve reliability while conserving disk space.",
        tech: ["Bash", "Linux", "Snapper"],
      },
      {
        title: "ShowMeTasks",
        description:
          "A modular full-stack task manager built with React and Spring Boot, emphasizing secure data handling and scalable architecture.",
        tech: ["Java", "React", "Spring Boot", "MySQL"],
      },
      {
        title: "LoveNotes",
        description:
          "A platform for sharing meaningful messages through an intuitive React interface combined with secure backend mail delivery.",
        tech: ["Java", "React", "Spring Boot", "MySQL"],
      },
      {
        title: "Gift Planner",
        description:
          "A structured application for organizing gift ideas and relationships, through a modern REST-driven system.",
        tech: ["Java", "React", "Spring Boot", "MySQL"],
      },
      {
        title: "Gratitude Journal",
        description:
          "A secure journaling experience centered around reflection and persistent data design.",
        tech: ["Java", "React", "Spring Boot", "MySQL"],
      },
    ];

    return (
      <>
        <h2 id="projects-title" className="section-title">
          Projects
        </h2>

        <p className="section-intro">
          Selected works focused on scalable systems and thoughtful design.
        </p>

        <ul
          className="projects-grid"
          role="list"
          aria-labelledby="projects-title"
        >
          {projects.map((project, index) => (
            <li key={index} className="project card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">
                  {project.description}
                </p>
              </div>

              <ul className="project-tech">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </>
    );
}

export default Projects;
