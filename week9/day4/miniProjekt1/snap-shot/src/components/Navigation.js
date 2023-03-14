import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/weed">weed</NavLink></li>
        <li><NavLink to="/ironman">ironman</NavLink></li>
        <li><NavLink to="/bitcoin">bitcoin</NavLink></li>
        <li><NavLink to="/food">Food</NavLink></li>
        <li><NavLink to="/shwarma">shwarma</NavLink></li>
        <li><NavLink to="/music">music</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;