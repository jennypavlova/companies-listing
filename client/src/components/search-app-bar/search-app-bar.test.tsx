import { render, screen } from '@testing-library/react';
import React from 'react';

import { SearchAppBar } from './search-app-bar';

test('renders search bar title', () => {
  const onChange = jest.fn();
  render(<SearchAppBar onChange={onChange} />);
  const title = screen.getByText(/companies listing/i);
  expect(title).toBeInTheDocument();
});
