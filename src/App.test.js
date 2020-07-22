import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn main card', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/About Jesse Hitch/i);
  expect(linkElement).toBeInTheDocument();
});
