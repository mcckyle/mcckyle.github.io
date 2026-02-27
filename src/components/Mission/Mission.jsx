//Filename: Mission.jsx
//Author: Kyle McColgan
//Date: 26 February 2026
//Description: This file contains the Mission component for the React personal project.

import React from 'react';

function Mission()
{
    return (
      <>
        <h2 id="mission-title" className="section-title">
          Mission
        </h2>

        <div
          className="section-text"
          role="region"
          aria-labelledby="mission-title"
        >
          <p className="section-lead">
            My mission consists of sharing the wealth of knowledge earned
            throughout my career in order to uplift and elevate the local
            technology community in Saint Louis.
          </p>

          <p>
            Through mentorship and collaboration, I strive to contribute simple,
            modern systems that raise the standard of local innovation and
            strengthen the people behind it.
          </p>
        </div>
      </>
    );
}

export default Mission;
