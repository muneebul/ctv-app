import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { GlobalFocusManager, useFocus } from '../focusManager';

const TestComponent = () => {
  const { focusMode, setFocusMode } = useFocus();
  return (
    <div>
      <div data-testid="focus-mode">{focusMode}</div>
      <button onClick={() => setFocusMode('rails')} data-testid="set-rails">
        Set Rails
      </button>
      <button onClick={() => setFocusMode('settings')} data-testid="set-settings">
        Set Settings
      </button>
    </div>
  );
};

describe('GlobalFocusManager', () => {
  it('provides focus context and updates focus mode', () => {
    const { getByTestId } = render(
      <GlobalFocusManager>
        <TestComponent />
      </GlobalFocusManager>
    );

    // Initial state
    expect(getByTestId('focus-mode')).toHaveTextContent('none');

    // Update to rails mode
    fireEvent.click(getByTestId('set-rails'));
    expect(getByTestId('focus-mode')).toHaveTextContent('rails');

    // Update to settings mode
    fireEvent.click(getByTestId('set-settings'));
    expect(getByTestId('focus-mode')).toHaveTextContent('settings');
  });

  it('handles escape key to reset focus mode', () => {
    const { getByTestId } = render(
      <GlobalFocusManager>
        <TestComponent />
      </GlobalFocusManager>
    );

    // Set focus mode to rails
    fireEvent.click(getByTestId('set-rails'));
    expect(getByTestId('focus-mode')).toHaveTextContent('rails');

    // Press escape key
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(getByTestId('focus-mode')).toHaveTextContent('none');
  });

  it('prevents default tab behavior', () => {
    const preventDefault = jest.fn();
    render(
      <GlobalFocusManager>
        <TestComponent />
      </GlobalFocusManager>
    );

    // Press tab key
    fireEvent.keyDown(window, { key: 'Tab', preventDefault });
    expect(preventDefault).toHaveBeenCalled();
  });
});