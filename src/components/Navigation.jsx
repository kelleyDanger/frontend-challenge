import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => (
  <ul>
    <li><Link to="/">One</Link></li>
    <li><Link to="/two">Two</Link></li>
    <li><Link to="/three">Three</Link></li>
  </ul>
);

export default Navigation;
