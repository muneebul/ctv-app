import React from 'react';
import styled from 'styled-components';
import { Device } from '../../types';

interface DeviceSectionProps {
  devices: Device[];
  onRemoveDevice: (id: string) => void;
  onRenameDevice: (id: string, newName: string) => void;
  focusedIndex: number;
}

const DeviceSection: React.FC<DeviceSectionProps> = ({
  devices,
  onRemoveDevice,
  onRenameDevice,
  focusedIndex
}) => {
  return (
    <Section>
      <Title>Device Management</Title>
      <DeviceList>
        {devices.map((device, index) => (
          <DeviceItem key={device.id} isFocused={index === focusedIndex}>
            <DeviceInfo>
              <DeviceName>{device.name}</DeviceName>
              <DeviceType>{device.type}</DeviceType>
              <LastActive>Last active: {device.lastActive}</LastActive>
            </DeviceInfo>
            <Actions>
              <ActionButton
                onClick={() => onRemoveDevice(device.id)}
                isFocused={index === focusedIndex}
              >
                Remove
              </ActionButton>
              <ActionButton
                onClick={() => {
                  const newName = prompt('Enter new device name:', device.name);
                  if (newName) onRenameDevice(device.id, newName);
                }}
                isFocused={index === focusedIndex}
              >
                Rename
              </ActionButton>
            </Actions>
          </DeviceItem>
        ))}
      </DeviceList>
    </Section>
  );
};

const Section = styled.section`
  margin: 20px 0;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;
  font-size: 24px;
`;

const DeviceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const DeviceItem = styled.div<{ isFocused: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 8px;
  transform: scale(${({ isFocused }) => (isFocused ? 1.02 : 1)});
  border: ${({ isFocused, theme }) =>
    isFocused ? `2px solid ${theme.colors.primary}` : 'none'};
  transition: all 0.3s ease;
`;

const DeviceInfo = styled.div``;

const DeviceName = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
`;

const DeviceType = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 4px;
`;

const LastActive = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
`;

const ActionButton = styled.button<{ isFocused: boolean }>`
  padding: 8px 16px;
  background: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.primary : theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export default DeviceSection;