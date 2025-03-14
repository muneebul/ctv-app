import React from 'react';
import { render, screen } from '@testing-library/react';
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
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
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

  it('applies focus styles when focused', () => {
    renderWithTheme(<HeroBanner content={mockContent} isFocused={true} />);
    const container = screen.getByText('Test Title').closest('div');
    expect(container).toHaveStyleRule('transform', 'scale(1.02)');
  });
});