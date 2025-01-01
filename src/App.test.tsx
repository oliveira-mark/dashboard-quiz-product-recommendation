import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the "Olá, Tailwind!" heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Olá, Tailwind!/i);
  expect(headingElement).toBeInTheDocument();
  expect(headingElement).toHaveClass('text-red-600');
});
