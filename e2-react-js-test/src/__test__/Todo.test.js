import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Todo from '../components/Todo';

afterEach(() => cleanup());

test('shoulds render non-completed todo', () => {
  const todo = { id: 1, title: 'wash dishes', completed: false };
  render(<Todo {...todo} />);
  //
  const todoElement = screen.getByTestId(`todo-${todo.id}`);
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent(/wash dishes/i);
  expect(todoElement).not.toContainHTML('<strike>');
});

test('shoulds render completed todo', () => {
  const todo = { id: 2, title: 'wash car', completed: true };
  render(<Todo {...todo} />);
  //
  const todoElement = screen.getByTestId(`todo-${todo.id}`);
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent(/wash car/i);
  expect(todoElement).not.toContainHTML('<strike>');
});

test('matches snapshot', () => {
  const todo = { id: 1, title: 'wash dishes', completed: false };
  const tree = renderer.create(<Todo {...todo} />).toJSON();
  //
  console.log(tree);
  /*
    type: ...,
    props: ...,
    children: ...,
  */
  //

  expect(tree).toMatchSnapshot();
});
