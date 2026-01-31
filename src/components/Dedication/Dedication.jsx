//Filename: Dedication.jsx
//Author: Kyle McColgan
//Date: 27 January 2026
//Description: This file contains the Dedication component for the personal React project.

import React from "react";
import "./Dedication.css";

function Dedication()
{
  return (
    <section
      id="dedication"
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
    </section>
  );
}

export default Dedication;
