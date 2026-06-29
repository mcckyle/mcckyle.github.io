//Filename: Projects.jsx
//Author: Kyle McColgan
//Date: 29 June 2026
//Description: This file contains the Projects component for the personal React project.

import React from "react";
import "./Projects.css";

function Projects()
{
    const projects = [
      {
        title: "STL Events",
        description:
          "A modern calendar experience for discovering and tracking events throughout Saint Louis with a streamlined React interface.",
        tech: ["Java", "React", "Spring Boot"],
        href: "https://mcckyle.github.io/the-calendar",
      },
      {
        title: "ShowMeTasks",
        description:
          "A modular full-stack task management platform focused on scalable architecture and secure data handling.",
        tech: ["Java", "React", "Spring Boot", "MySQL"],
      },
      {
        title: "LoveNotes",
        description:
          "A thoughtful messaging platform combining an intuitive React experience with secure backend mail delivery.",
        tech: ["Java", "React", "Spring Boot", "MySQL"],
      },
      {
        title: "Gift Planner",
        description:
          "A structured gift planning system built around modern REST-driven application architecture.",
        tech: ["Java", "React", "Spring Boot", "MySQL"],
      },
      {
        title: "Gratitude Journal",
        description:
          "A secure journaling experience centered around reflection and long-term persistence.",
        tech: ["Java", "React", "Spring Boot", "MySQL"],
      },
      {
        title: "PotOfGoals",
        description:
          "A modern personal goal tracking platform designed around reflective workflows and seasonal interactions.",
        tech: ["Java", "React", "Spring Boot", "MySQL"],
      },
    ];

    return (
      <>
        <header className="section-header">
          <h2 id="projects-title">
            Projects
          </h2>

          <p className="section-intro">
            Selected works focused on scalable systems and thoughtful user experiences.
          </p>
        </header>

        <ul
          className="content-grid projects-grid"
          role="list"
          aria-labelledby="projects-title"
        >
          {projects.map((project) => (
            <li key={project.title}>
              <article className="project surface-card">
                <header className="project-header">
                  <h3>{project.title}</h3>
                  {project.href && (
                    <a
                      className="project-link"
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit
                    </a>
                  )}
                </header>
                <p>{project.description}</p>

                <ul
                  className="tech-list"
                  aria-label={`${project.title} technologies`}
                >
                  {project.tech.map((tech) => (
                    <li key={tech} className="tech-pill">{tech}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </>
    );
}

export default Projects;
