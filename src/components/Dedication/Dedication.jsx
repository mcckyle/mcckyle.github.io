//Filename: Dedication.jsx
//Author: Kyle McColgan
//Date: 2 October 2025
//Description: This file contains the component for the React personal project dedication section.

import React from "react";
import "./Dedication.css";

function Dedication()
{
  return (
    <section
      id="dedication"
      aria-labelledby="dedication-title"
      className="section"
    >
      <h2 id="dedication-title" className="section-title">
        Dedication
      </h2>
      <div id="dedication-body" className="section-body">
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
