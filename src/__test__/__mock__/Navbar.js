import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

const Navbar = () => (
  <BrowserRouter>
    <div className="navbar">
      <h2>Math Magician</h2>
      <ul className="navLinks">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="Calculator">Calculator</Link>
        </li>
        <li>
          <Link to="Quotes">Quotes</Link>
        </li>
      </ul>
    </div>
  </BrowserRouter>
);

export default Navbar;
