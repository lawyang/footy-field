import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li>
          <Link to="/user">
            User Home
          </Link>
        </li>
        <li>
          <Link to="/info">
            Info Page
          </Link>
        </li>
        <li>
          <Link to="formation">
            Formations
          </Link>
        </li>
        <li>
          <Link to="resource">
            Resources
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
