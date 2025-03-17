import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.scss"; 

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/html">HTML</Link></li>
        <li><Link to="/css">CSS</Link></li>
        <li><Link to="/javascript">JavaScript</Link></li>
        <li><Link to="/react">React</Link></li>
        <li><Link to="/sanity">Sanity</Link></li> 
      </ul>
    </nav>
  );
};

export default Nav;
