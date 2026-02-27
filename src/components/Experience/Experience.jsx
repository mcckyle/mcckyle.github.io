//Filename: Experience.jsx
//Author: Kyle McColgan
//Date: 26 February 2026
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
        Roles centered on measurable impact and
        building reliable systems that last.
      </p>

      <ol className="experience-timeline">
        {experiences.map((exp, index) => (
          <li key={index} className="experience-entry">
            <div className="experience-marker" aria-hidden="true" />

            <div className="experience-content">
              <h3 className="experience-role">{exp.role}</h3>

              <div className="experience-meta">
                <span className="experience-company">{exp.company}</span>
                <time
                  className="experience-period"
                  dateTime={exp.dateTime}
                >
                  {exp.period}
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
