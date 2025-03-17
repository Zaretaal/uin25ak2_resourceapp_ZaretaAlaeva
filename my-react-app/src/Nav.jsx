
import React from "react";

const Nav = ({ onNavClick }) => {
  return (
    <nav>
      <ul>
        <li><a href="#" onClick={() => onNavClick("HTML")}>HTML</a></li>
        <li><a href="#" onClick={() => onNavClick("CSS")}>CSS</a></li>
        <li><a href="#" onClick={() => onNavClick("JavaScript")}>JavaScript</a></li>
        <li><a href="#" onClick={() => onNavClick("React")}>React</a></li>
        <li><a href="#" onClick={() => onNavClick("Sanity and Headless CMS")}>Sanity and Headless CMS</a></li>
      </ul>
    </nav>
  );
};

export default Nav;

