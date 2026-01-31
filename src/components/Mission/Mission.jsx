//Filename: Mission.jsx
//Author: Kyle McColgan
//Date: 27 January 2026
//Description: This file contains the Mission component for the personal React project.

import React from 'react';
import './Mission.css';

function Mission()
{
    return (
      <section
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
      </section>
    );
}

export default Mission;
