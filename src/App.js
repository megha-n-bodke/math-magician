import React from 'react';
import Calculator from './Components/Calculator';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar />
        <Home />
        <Calculator />
      </>
    );
  }
}

export default App;
