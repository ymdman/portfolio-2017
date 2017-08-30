import React from 'react';
import { Link } from 'react-router-dom';


const GlobalHeader = () => (
  <header className="l-global-header">
    <h1>Site Logo</h1>
    <nav>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skill">Skill</Link></li>
        <li><Link to="/career">Career</Link></li>
      </ul>
    </nav>
  </header>
);

export default GlobalHeader;
