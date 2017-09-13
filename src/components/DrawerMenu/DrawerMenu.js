import React from 'react';
import { Link } from 'react-router-dom';

const DrawerMenu = () => (
  <nav>
    <ul>
      <li><Link to="/">About</Link></li>
      <li><Link to="/skill">Skill</Link></li>
      <li><Link to="/career">Career</Link></li>
    </ul>
  </nav>
);

export default DrawerMenu;
