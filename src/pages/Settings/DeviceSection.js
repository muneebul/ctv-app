import React from 'react';
import styled from 'styled-components';

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  ${({ theme }) => theme.typography.h2};
`;

const DevicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const DeviceCard = styled.div`
  background: ${({ theme }) => theme.colors.background.dark};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  
  &.focusable:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const DeviceName = styled.h3`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  ${({ theme }) => theme.typography.h3};
`;

const DeviceInfo = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Button = styled.button`
  background: ${({ primary }) => primary ? ({ theme }) => theme.colors.primary : 'transparent'};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  
  &.focusable:focus {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

const DeviceSection = ({ devices }) => {
  const handleRemoveDevice = (deviceId) => {
    console.log('Remove device:', deviceId);
  };

  const handleRenameDevice = (deviceId) => {
    console.log('Rename device:', deviceId);
  };

  return (
    <>
      <SectionTitle>Registered Devices</SectionTitle>
      <DevicesGrid>
        {devices.map((device) => (
          <DeviceCard key={device.id} className="focusable" tabIndex={0}>
            <DeviceName>{device.name}</DeviceName>
            <DeviceInfo>
              Type: {device.type}
              <br />
              Last Active: {new Date(device.lastActive).toLocaleString()}
            </DeviceInfo>
            <ButtonGroup>
              <Button
                className="focusable"
                primary
                onClick={() => handleRenameDevice(device.id)}
              >
                Rename
              </Button>
              <Button
                className="focusable"
                onClick={() => handleRemoveDevice(device.id)}
              >
                Remove
              </Button>
            </ButtonGroup>
          </DeviceCard>
        ))}
      </DevicesGrid>
    </>
  );
};

export default DeviceSection;