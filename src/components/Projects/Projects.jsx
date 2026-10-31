//Filename: Projects.jsx
//Author: Kyle McColgan
//Date: 31 October 2026
//Description: This file contains the Projects component for the personal React project.

import React from "react";
import "./Projects.css";

const PROJECTS = Object.freeze([
  {
    id: "stlevents",
    title: "STL Events",
    description:
      "A modern calendar experience for discovering and tracking events throughout Saint Louis.",
    tech: ["Java", "React", "Spring Boot"],
    href: "https://mcckyle.github.io/the-calendar",
  },
  {
    id: "showmoevents",
    title: "ShowMOEvents",
    description:
      "A local event discovery platform connecting the Saint Louis community through accessible event exploration and sharing.",
    tech: ["Java", "React", "Spring Boot", "MySQL"],
  },
  {
    id: "showmetasks",
    title: "ShowMeTasks",
    description:
      "A modular task management platform built around maintainable architecture and secure data handling.",
    tech: ["Java", "React", "Spring Boot", "MySQL"],
  },
  {
    id: "lovenotes",
    title: "LoveNotes",
    description:
      "A personal messaging platform combining an intuitive React interface with secure backend mail delivery.",
    tech: ["Java", "React", "Spring Boot", "MySQL"],
  },
  {
    id: "giftplanner",
    title: "Gift Planner",
    description:
      "A structured gift planning application powered by modern REST APIs and maintainable full-stack architecture.",
    tech: ["Java", "React", "Spring Boot", "MySQL"],
  },
  {
    id: "gratitudejournal",
    title: "Gratitude Journal",
    description:
      "A private journaling application designed to support personal reflection and persistent record keeping.",
    tech: ["Java", "React", "Spring Boot", "MySQL"],
  },
  {
    id: "potofgoals",
    title: "PotOfGoals",
    description:
      "A personal goal tracking platform centered around reflective workflows and seasonal experiences.",
    tech: ["Java", "React", "Spring Boot", "MySQL"],
  },
]);

function Projects()
{
  return (
    <>
      <header className="section-header">
        <h2 id="projects-title">
          Projects
        </h2>

        <p className="section-intro">
          Selected works exploring maintainable architecture and practical software solutions.
        </p>
      </header>

      <ul
        className="content-grid projects-grid"
        aria-labelledby="projects-title"
      >
        {PROJECTS.map((project) => (
          <li key={project.id}>
            <article
              className="project surface-card"
              aria-labelledby={`${project.id}-title`}
            >
              <header className="project-header">
                <h3 id={`${project.id}-title`}>{project.title}</h3>
                {project.href && (
                  <a
                    className="project-link"
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} project (opens in a new tab)`}
                  >
                    <span>View Project</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </header>
              <p className="project-description">{project.description}</p>

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
