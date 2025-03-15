import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import ProfileSection from '../ProfileSection';
import { theme } from '../../../styles/theme';
import { Profile } from '../../../types';

const mockCurrentProfile: Profile = {
  id: '1',
  name: 'John Doe',
  imageUrl: 'test1.jpg'
};

const mockAvailableProfiles: Profile[] = [
  mockCurrentProfile,
  {
    id: '2',
    name: 'Jane Smith',
    imageUrl: 'test2.jpg'
  },
  {
    id: '3',
    name: 'Kids',
    imageUrl: 'test3.jpg'
  }
];

const mockOnSwitchProfile = jest.fn();
const mockOnUpdateProfile = jest.fn();

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};

describe('ProfileSection', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders current profile and available profiles', () => {
    renderWithTheme(
      <ProfileSection
        currentProfile={mockCurrentProfile}
        availableProfiles={mockAvailableProfiles}
        onSwitchProfile={mockOnSwitchProfile}
        onUpdateProfile={mockOnUpdateProfile}
        focusedIndex={-1}
      />
    );

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('Kids')).toBeInTheDocument();
  });

  it('calls onSwitchProfile when clicking another profile', async () => {
    renderWithTheme(
      <ProfileSection
        currentProfile={mockCurrentProfile}
        availableProfiles={mockAvailableProfiles}
        onSwitchProfile={mockOnSwitchProfile}
        onUpdateProfile={mockOnUpdateProfile}
        focusedIndex={1}
      />
    );

    const otherProfile = screen.getByText('Jane Smith').closest('div');

    await act(async () => {
      fireEvent.click(otherProfile!);
    });

    expect(mockOnSwitchProfile).toHaveBeenCalledWith('2');
  });
});
