//Filename: Projects.jsx
//Author: Kyle McColgan
//Date: 28 May 2026
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
        linkLabel: "Visit Project",
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
          "A structured gift planning system designed around modern REST-driven architecture.",
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
          "A modern personal goal tracking platform with seasonal interaction design and reflective workflows.",
        tech: ["Java", "React", "Spring Boot", "MySQL"],
      },
    ];

    return (
      <>
        <h2 id="projects-title" className="section-title">
          Projects
        </h2>

        <p className="section-intro">
          Selected works focused on scalable systems and thoughtful user experiences.
        </p>

        <ul
          className="content-grid"
          role="list"
          aria-labelledby="projects-title"
        >
          {projects.map((project) => (
            <li key={project.title} className="content-card project card">
              <article className="project-shell">
                <div className="content-stack project-stack">
                  <header className="project-header">
                    <h3 className="content-title">{project.title}</h3>
                    {project.href && (
                      <a
                        className="project-link"
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.title}`}
                      >
                        {project.linkLabel}
                      </a>
                    )}
                  </header>
                  <p className="content-description">
                    {project.description}
                  </p>
                </div>

                <ul
                  className="tech-list"
                  role="list"
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
