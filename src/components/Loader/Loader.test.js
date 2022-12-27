import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Loader from './Loader';

afterEach(() => {
  cleanup();
})

test('Should render Loader component', () => {
  render(<Loader />);
  const loaderElement = screen.getByTestId('loader');
  expect(loaderElement).toBeInTheDocument();
  expect(loaderElement).toHaveTextContent('Loading...');
})

test('matches snapshot', () => {
  const tree = renderer.create(<Loader />).toJSON;
  expect(tree).toMatchSnapshot();
})