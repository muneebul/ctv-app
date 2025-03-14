import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { configureStore } from '@reduxjs/toolkit';
import HomePage from '../index';
import contentReducer from '../../../store/slices/contentSlice';
import { theme } from '../../../styles/theme';

const renderWithProviders = (component: React.ReactElement) => {
  const store = configureStore({
    reducer: {
      content: contentReducer
    }
  });

  return render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {component}
      </ThemeProvider>
    </Provider>
  );
};

describe('HomePage', () => {
  it('renders hero banner and content rails', () => {
    renderWithProviders(<HomePage />);
    expect(screen.getByText('Featured Title')).toBeInTheDocument();
  });

  it('handles keyboard navigation correctly', () => {
    renderWithProviders(<HomePage />);
    const container = screen.getByTestId('home-container');

    // Initial state - hero banner should be focused
    expect(screen.getByTestId('hero-banner')).toHaveAttribute('data-focused', 'true');

    // Navigate down to first rail
    fireEvent.keyDown(container, { key: 'ArrowDown' });
    expect(screen.getByTestId('rail-0')).toHaveAttribute('data-focused', 'true');

    // Navigate to next rail
    fireEvent.keyDown(container, { key: 'ArrowDown' });
    expect(screen.getByTestId('rail-1')).toHaveAttribute('data-focused', 'true');

    // Navigate within rail
    fireEvent.keyDown(container, { key: 'ArrowRight' });
    const rail = screen.getByTestId('rail-1');
    expect(rail.querySelector('[data-focused="true"]')).toBeInTheDocument();
  });

  it('handles edge cases in navigation', () => {
    renderWithProviders(<HomePage />);
    const container = screen.getByTestId('home-container');

    // Try to navigate up when at the top
    fireEvent.keyDown(container, { key: 'ArrowUp' });
    expect(screen.getByTestId('hero-banner')).toHaveAttribute('data-focused', 'true');

    // Navigate to last rail
    for (let i = 0; i < 3; i++) {
      fireEvent.keyDown(container, { key: 'ArrowDown' });
    }

    // Try to navigate past last rail
    fireEvent.keyDown(container, { key: 'ArrowDown' });
    expect(screen.getByTestId('rail-2')).toHaveAttribute('data-focused', 'true');
  });
});