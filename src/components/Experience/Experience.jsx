//Filename: Experience.jsx
//Author: Kyle McColgan
//Date: 26 July 2026
//Description: This file contains the Experience component for the React personal project.

import React from "react";
import "./Experience.css";

const EXPERIENCES = Object.freeze([
  {
    id: "primary-systems",
    company: "Primary Systems",
    role: "IT System Engineer",
    start: "2023-05",
    end: "2023-09",
    startLabel: "May 2023",
    endLabel: "September 2023",
  },
  {
    id: "walmart",
    company: "Walmart",
    role: "Software Engineer",
    start: "2021-07",
    end: "2022-10",
    startLabel: "July 2021",
    endLabel: "October 2022",
  },
]);

function Experience()
{
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
        {EXPERIENCES.map((experience) => (
          <li key={experience.id} className="experience-entry">
            <span className="experience-marker" aria-hidden="true" />

            <article className="experience-card surface-card">
              <header className="experience-header">
                <div className="experience-heading">
                  <h3>{experience.role}</h3>
                  <p className="experience-company">{experience.company}</p>
                </div>

                <div className="experience-period" aria-label="Employment period">
                  <time dateTime={experience.start}>
                    {experience.startLabel}
                  </time>
                  <span aria-hidden="true">–</span>
                  <time dateTime={experience.end}>
                    {experience.endLabel}
                  </time>
                </div>
              </header>
            </article>
          </li>
        ))}
      </ol>
    </>
  );
}

export default Experience;
