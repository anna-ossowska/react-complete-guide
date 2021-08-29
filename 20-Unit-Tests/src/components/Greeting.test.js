import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders Hello World as a text', () => {
  // Arrange
  render(<Greeting />);

  // Act
  // ...N/A

  // Assert
  const helloWorldEl = screen.getByText('hello world', { exact: false });
  expect(helloWorldEl).toBeInTheDocument();
});
