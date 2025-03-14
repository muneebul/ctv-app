import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import SubscriptionSection from '../SubscriptionSection';
import { theme } from '../../../styles/theme';
import { Subscription } from '../../../types';

const mockSubscription: Subscription = {
  plan: 'Premium',
  status: 'active',
  expiryDate: '2024-07-15',
  autoRenewal: true
};

const mockOnUpdateAutoRenewal = jest.fn();

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};

describe('SubscriptionSection', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders subscription details correctly', () => {
    renderWithTheme(
      <SubscriptionSection
        subscription={mockSubscription}
        onUpdateAutoRenewal={mockOnUpdateAutoRenewal}
        focusedIndex={-1}
      />
    );

    expect(screen.getByText(/Premium/)).toBeInTheDocument();
    expect(screen.getByText(/active/)).toBeInTheDocument();
    expect(screen.getByText(/2024-07-15/)).toBeInTheDocument();
    expect(screen.getByText(/Auto-Renewal: Enabled/)).toBeInTheDocument();
  });

  it('calls onUpdateAutoRenewal when clicking the toggle button', () => {
    renderWithTheme(
      <SubscriptionSection
        subscription={mockSubscription}
        onUpdateAutoRenewal={mockOnUpdateAutoRenewal}
        focusedIndex={1}
      />
    );

    const toggleButton = screen.getByText(/Auto-Renewal: Enabled/);
    fireEvent.click(toggleButton);

    expect(mockOnUpdateAutoRenewal).toHaveBeenCalledWith(false);
  });

  it('applies focus styles to the focused elements', () => {
    renderWithTheme(
      <SubscriptionSection
        subscription={mockSubscription}
        onUpdateAutoRenewal={mockOnUpdateAutoRenewal}
        focusedIndex={0}
      />
    );

    const subscriptionInfo = screen.getByText(/Premium/).closest('div');
    expect(subscriptionInfo).toHaveStyleRule('transform', 'scale(1.02)');
  });
});