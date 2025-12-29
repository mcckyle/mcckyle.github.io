//Filename: History.jsx
//Author: Kyle McColgan
//Date: 29 December 2025
//Description: This file contains the component for the React personal project professional history section.

import React from "react";
import "./History.css";

function History()
{
  const experiences = [
    {
      company: "Primary Systems",
      role: "IT System Engineer",
      period: "May 2023 - September 2023",
    },
    {
      company: "Walmart",
      role: "Software Engineer",
      period: "July 2021 - October 2022",
    },
  ];

  return (
    <div
      id="history"
      role="region"
      className="section-content history"
      aria-labelledby="history-title"
    >
      <h2 id="history-title" className="section-title">
        Professional History
      </h2>

      <p className="history-intro">
        A focused timeline of roles centered on systems reliability,
        engineering discipline, and practical software development.
      </p>

      <ol className="history-list">
        {experiences.map((exp, index) => (
          <li key={index} className="history-item">
            <span className="history-marker" aria-hidden="true" />

            <div className="history-content">
              <h3 className="history-role">{exp.role}</h3>
              <p className="history-company">{exp.company}</p>
              <time className="history-period">{exp.period}</time>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default History;
