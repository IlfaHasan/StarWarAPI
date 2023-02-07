import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders star war heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/star war/i);
  expect(linkElement).toBeInTheDocument();
});
