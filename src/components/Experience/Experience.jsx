//Filename: Experience.jsx
//Author: Kyle McColgan
//Date: 26 June 2026
//Description: This file contains the Experience component for the React personal project.

import React from "react";
import "./Experience.css";

function Experience()
{
  const experiences = [
    {
      company: "Primary Systems",
      role: "IT System Engineer",
      period: "May 2023 - September 2023",
      dateTime: "2023-05/2023-09",
    },
    {
      company: "Walmart",
      role: "Software Engineer",
      period: "July 2021 - October 2022",
      dateTime: "2021-07/2022-10",
    },
  ];

  return (
    <>
      <header className="section-header">
        <h2 id="experience-title">
          Experience
        </h2>

        <p className="section-intro">
          Roles centered on building reliable systems designed to last.
        </p>
      </header>

      <ol className="experience-list" aria-labelledby="experience-title">
        {experiences.map((experience) => (
          <li
            key={`${experience.company}-${experience.role}`}
            className="experience-entry"
          >
            <span className="experience-marker" aria-hidden="true" />

            <article className="experience-card surface-card">
              <h3>{experience.role}</h3>

              <div className="experience-meta">
                <span>{experience.company}</span>
                <time dateTime={experience.dateTime}>
                  {experience.period}
                </time>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </>
  );
}

export default Experience;
