import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import Button from '@material-ui/core/Button';

const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li><Link to="/user">User Home</Link></li>
        <li><Link to="/addFormation">New Formation</Link></li>
        <li><Link to="/formation">Formations</Link></li>
        <li><Link to="/draw">White Board</Link></li>
        <li><Link to="/resource">Tech Stack</Link></li>
      </ul>
    </div> 
</div>
);

export default Nav;

