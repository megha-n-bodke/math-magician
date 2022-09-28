import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from './__mock__/Navbar';

// import { RouterWrapper } from "../path/to/RouterWrapper";

test('Navbar snapshot testing', () => {
  const navbar = renderer.create(<Navbar />);
  const navObject = navbar.toJSON();
  expect(navObject).toMatchSnapshot();
});
