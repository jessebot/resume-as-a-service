import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders main card', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Jesse Hitch/i);
  expect(linkElement).toBeInTheDocument();
});
