import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
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
    );
  }
}

export default Navbar;
