//Filename: Experience.jsx
//Author: Kyle McColgan
//Date: 29 April 2026
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
      <h2 id="experience-title" className="section-title">
        Experience
      </h2>

      <p className="section-intro">
        Roles centered on building reliable systems designed to last.
      </p>

      <ol className="experience-timeline" aria-labelledby="experience-title">
        {experiences.map((experience) => (
          <li
            key={`${experience.company}-${experience.role}`}
            className="experience-entry"
          >
            <span className="experience-marker" aria-hidden="true" />

            <div className="experience-content">
              <h3 className="experience-role">{experience.role}</h3>

              <div className="experience-meta">
                <span className="experience-company">{experience.company}</span>
                <time className="experience-period" dateTime={experience.dateTime}>
                  {experience.period}
                </time>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}

export default Experience;
