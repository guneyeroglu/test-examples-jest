import { render, screen } from '@testing-library/react';
import HelloWorld from '../components/HelloWorld';

test('should find text in element tree', () => {
  render(<HelloWorld />);
  //
  const helloWorldElement = screen.getByTestId('helloWorld-1');
  expect(helloWorldElement).toBeInTheDocument();
});

test('should render hello world', () => {
  render(<HelloWorld />);
  //
  const helloWorldElement = screen.getByText(/Hello, world!/i);
  expect(helloWorldElement).toBeInTheDocument();
});
