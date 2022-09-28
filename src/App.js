import React from 'react';
import { Route, Routes, Router } from 'react-router-dom';
import Calculator from './Components/Calculator';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import Quotes from './Components/Pages/Quotes';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Calculator" element={<Calculator />} />
            <Route path="Quotes" element={<Quotes />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
