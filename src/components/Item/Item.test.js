import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Item from './Item';
import AppContextProvider from '../../context/cartContext';

afterEach(() => {
  cleanup();
})

test('Should render Item component', () => {
  const data = {
    id: 1,
    name: "Carne",
    price: 250
  }

  const setShow = () => {
    console.log('setShow status changed')
  }

  render(
    <AppContextProvider>
      <Item key={data.id} data={data} setShow={setShow} />
    </AppContextProvider>
  );
  const itemElement = screen.getByTestId(`item-${data.id}`);
  expect(itemElement).toBeInTheDocument();
  expect(itemElement).toHaveTextContent(`${data.name}`);
  expect(itemElement).toHaveTextContent(`Precio: $ ${data.price} c/u`);
})

test('matches snapshot', () => {
  const tree = renderer.create(<Item />).toJSON;
  expect(tree).toMatchSnapshot();
})