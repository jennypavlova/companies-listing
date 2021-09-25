import React from 'react';
import { render, screen, } from '@testing-library/react';
import { SearchAppBar } from './search-app-bar';

test('renders search bar title', () => {
  render(<SearchAppBar />);
  const title = screen.getByText(/companies listing/i);
  expect(title).toBeInTheDocument();
});
