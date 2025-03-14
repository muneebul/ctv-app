import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import DeviceSection from '../DeviceSection';
import { theme } from '../../../styles/theme';
import { Device } from '../../../types';

const mockDevices: Device[] = [
  {
    id: '1',
    name: 'Living Room TV',
    type: 'Smart TV',
    lastActive: '2023-07-15'
  },
  {
    id: '2',
    name: 'Mobile Phone',
    type: 'Smartphone',
    lastActive: '2023-07-14'
  }
];

const mockOnRemoveDevice = jest.fn();
const mockOnRenameDevice = jest.fn();

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};

describe('DeviceSection', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all devices with their information', () => {
    renderWithTheme(
      <DeviceSection
        devices={mockDevices}
        onRemoveDevice={mockOnRemoveDevice}
        onRenameDevice={mockOnRenameDevice}
        focusedIndex={-1}
      />
    );

    expect(screen.getByText('Living Room TV')).toBeInTheDocument();
    expect(screen.getByText('Mobile Phone')).toBeInTheDocument();
    expect(screen.getByText('Smart TV')).toBeInTheDocument();
    expect(screen.getByText('Smartphone')).toBeInTheDocument();
  });

  it('calls onRemoveDevice when remove button is clicked', () => {
    renderWithTheme(
      <DeviceSection
        devices={mockDevices}
        onRemoveDevice={mockOnRemoveDevice}
        onRenameDevice={mockOnRenameDevice}
        focusedIndex={0}
      />
    );

    const removeButtons = screen.getAllByText('Remove');
    fireEvent.click(removeButtons[0]);

    expect(mockOnRemoveDevice).toHaveBeenCalledWith('1');
  });

  it('applies focus styles to the focused device', () => {
    renderWithTheme(
      <DeviceSection
        devices={mockDevices}
        onRemoveDevice={mockOnRemoveDevice}
        onRenameDevice={mockOnRenameDevice}
        focusedIndex={0}
      />
    );

    const firstDevice = screen.getByText('Living Room TV').closest('div');
    expect(firstDevice).toHaveStyleRule('transform', 'scale(1.02)');
  });
});