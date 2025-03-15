import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import HeroBanner from '../index';
import { theme } from '../../../styles/theme';

const mockContent = {
  id: 'test',
  title: 'Test Title',
  thumbnailUrl: 'test.jpg',
  description: 'Test Description',
  type: 'movie' as const
};

const renderWithTheme = (component: React.ReactElement) => {
  let result;
  act(() => {
    result = render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
  });
  return result!;
};

describe('HeroBanner', () => {
  it('renders with default props', () => {
    renderWithTheme(<HeroBanner />);
    expect(screen.getByText('Featured Title')).toBeInTheDocument();
    expect(screen.getByText('Watch our featured content now!')).toBeInTheDocument();
    expect(screen.getByText('Play Now')).toBeInTheDocument();
  });

  it('renders with provided content', () => {
    renderWithTheme(<HeroBanner content={mockContent} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Play Now')).toBeInTheDocument();
  });

  it('displays correct background image', () => {
    renderWithTheme(<HeroBanner content={mockContent} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'test.jpg');
  });

  it('handles missing content gracefully', () => {
    renderWithTheme(<HeroBanner content={undefined} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'https://example.com/featured.jpg');
  });
});
