//Filename: Mission.jsx
//Author: Kyle McColgan
//Date: 29 September 2025
//Description: This file contains the component for the personal React project mission statement.

import React from 'react';
import './Mission.css';

function Mission()
{
    return (
        <section
          id="mission"
          aria-labelledby="mission-title"
          className="section"
        >
          <div className="mission-content">
            <h2 id="mission-title" className="mission-title">Mission Statement</h2>
            <p>
                My mission is to uplift the local tech community by sharing the knowledge I've gained and fostering an environment of integrity, collaboration, and continuous growth. Through leading by example, I aim to inspire others in their journey toward technical excellence.
            </p>
            <p>
                I am dedicated to supporting developers, IT professionals, and organizations in building secure, efficient, and scalable systems. My goal is to exceed expectations by delivering solutions that are thoughtfully designed, secure, and accessible.
            </p>
            <p>
                Driven by the evolving world of technology, I embrace challenges as opportunities for growth. By staying curious and persistent, I strive to contribute positively to the broader tech landscape while growing personally and professionally.
            </p>
          </div>
        </section>
    );
}

export default Mission;
