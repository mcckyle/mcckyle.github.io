//Filename: Mission.jsx
//Author: Kyle McColgan
//Date: 29 December 2025
//Description: This file contains the component for the personal React project mission statement.

import React from 'react';
import './Mission.css';

function Mission()
{
    return (
      <div
        id="mission"
        className="section-content mission"
        aria-labelledby="mission-title"
      >
        <h2 id="mission-title" className="section-title">
          Mission
        </h2>

        <div className="mission-body">
          <p className="mission-lead">
            My mission is to uplift the local tech community by sharing the
            knowledge I've gained and fostering an environment of integrity,
            collaboration, and continuous growth.
          </p>

          <p>
            I am dedicated to supporting developers, IT professionals, and
            organizations in building secure, efficient, and scalable systems.
            My goal is to exceed expectations by delivering solutions that are
            thoughtfully designed, secure, and accessible.
          </p>

          <p>
            Driven by the evolving world of technology, I embrace challenges as
            opportunities for growth. By staying curious and persistent, I strive
            to contribute positively to the broader tech landscape while growing
            personally and professionally.
          </p>
        </div>
      </div>
    );
}

export default Mission;
