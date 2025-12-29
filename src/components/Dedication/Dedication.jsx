//Filename: Dedication.jsx
//Author: Kyle McColgan
//Date: 29 December 2025
//Description: This file contains the component for the React personal project dedication section.

import React from "react";
import "./Dedication.css";

function Dedication()
{
  return (
    <div
      id="dedication"
      role="region"
      className="section-content dedication"
      aria-labelledby="dedication-title"
    >
      <h2 id="dedication-title" className="section-title">
        Dedication
      </h2>

      <div className="dedication-body">
        <p>
          This website is lovingly dedicated to my family and closest friends,
          whose encouragement fuels my strength.
        </p>
        <p>
          This work is a testament to your guidance, patience, and unwavering
          faith in me. For all that you are, and all that you have given - I am
          deeply grateful.
        </p>
      </div>
    </div>
  );
}

export default Dedication;
