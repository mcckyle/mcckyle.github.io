//Filename: Projects.jsx
//Author: Kyle McColgan
//Date: 29 September 2025
//Description: This file contains the component for the personal React project projects section.

import React from 'react';
import './Projects.css';

function Projects()
{
    const projects = [
        {
            title: "Automated Snapshot Management Script",
            description: "A Bash script designed to automate and manage system snapshots using Snapper. This project enhances system reliability by creating, managing, and restoring snapshots efficiently. The system automatically transfers snapshot contents to a local host for external storage, ensuring minimal storage usage while maintaining comprehensive versioning. The script is lightweight, user-friendly, and integrates seamlessly with Linux environments.",
            tech: ["Bash", "Linux", "Snapper"]
        },
        {
            title: "ShowMeTasks",
            description: "A full-stack to-do list application built with Java, React, and Spring Boot. The project provides a streamlined user experience for task management, featuring responsive design, robust backend logic, and a secure API for seamless interaction between the frontend and backend. This project emphasizes clean architecture and effective use of RESTful services.",
            tech: ["Java", "React", "Spring Boot", "MySQL"]
        }
    ];

    return (
        <section id="projects" className="section" aria-labelledby="projects-title">
          <div className="projects-container">
              <h2 id="projects-title" className="projects-title">Projects</h2>
              <ul className="projects-list">
              {projects.map((project, index) => (
                  <li key={index} className="project-card">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <ul className="project-tech">
                    {project.tech.map((tech, i) => (
                        <li key={i} className="tech-tag">{tech}</li>
                    ))}
                    </ul>
                  </li>
              ))}
              </ul>
          </div>
        </section>
    );
}

export default Projects;
