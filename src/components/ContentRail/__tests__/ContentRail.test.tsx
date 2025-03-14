import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import ContentRail from '../index';
import { theme } from '../../../styles/theme';
import { Content } from '../../../types';

const mockContents: Content[] = [
  {
    id: '1',
    title: 'Test Movie 1',
    thumbnailUrl: 'test1.jpg',
    type: 'movie'
  },
  {
    id: '2',
    title: 'Test Series 1',
    thumbnailUrl: 'test2.jpg',
    type: 'series'
  }
];

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};

describe('ContentRail', () => {
  it('renders rail title and content items', () => {
    renderWithTheme(
      <ContentRail
        title="Test Rail"
        contents={mockContents}
        isFocused={false}
        focusedItemIndex={-1}
      />
    );

    expect(screen.getByText('Test Rail')).toBeInTheDocument();
    expect(screen.getByText('Test Movie 1')).toBeInTheDocument();
    expect(screen.getByText('Test Series 1')).toBeInTheDocument();
  });

  it('applies focus styles to the correct item', () => {
    renderWithTheme(
      <ContentRail
        title="Test Rail"
        contents={mockContents}
        isFocused={true}
        focusedItemIndex={0}
      />
    );

    const firstItem = screen.getByText('Test Movie 1').closest('div');
    const secondItem = screen.getByText('Test Series 1').closest('div');

    expect(firstItem).toHaveStyleRule('transform', 'scale(1.1)');
    expect(secondItem).toHaveStyleRule('transform', 'scale(1)');
  });
});