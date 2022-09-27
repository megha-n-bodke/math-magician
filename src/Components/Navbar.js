import React from 'react';

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
          <li>Home</li>
          <li>Calculator</li>
          <li>Quote</li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
