import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from '@/pages/Home/Home';

test('renders Home title', () => {
  render(<Home />);
  expect(screen.getByText('Главная страница')).toBeInTheDocument();
});
