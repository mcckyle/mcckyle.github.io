//Filename: Header.jsx
//Author: Kyle McColgan
//Date: 9 May 2025
//Description: Contains the React component for the website contact header section.

import React from 'react';
import profilePic from '/images/kdm-ocean-01.png';

function Header() {
    return (
        <header>
            <h1>Kyle D. McColgan</h1>
            <h2>Technology Professional</h2>
            <img className="profile-img"
            src={profilePic}
            alt="KDM picture" />
        </header>
    );
}

export default Header;
