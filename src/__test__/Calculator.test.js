import renderer from 'react-test-renderer';
import Calculator from '../Components/Calculator';

test('Calculator snapshot testing', () => {
  const navbar = renderer.create(<Calculator />);
  const navObject = navbar.toJSON();
  expect(navObject).toMatchSnapshot();
});
