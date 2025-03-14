import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ProfileSection from '../../components/Settings/ProfileSection';
import SubscriptionSection from '../../components/Settings/SubscriptionSection';
import DeviceSection from '../../components/Settings/DeviceSection';
import { mockProfiles } from '../../mockData/profiles';
import { mockSubscription } from '../../mockData/subscription';

interface SettingsPageProps {}

const SettingsPage: React.FC<SettingsPageProps> = () => {
  const navigate = useNavigate();
  const { setFocusMode } = useFocus();
  const [focusedSection, setFocusedSection] = React.useState(0);
  const [focusedItem, setFocusedItem] = React.useState(0);
  const [currentProfile, setCurrentProfile] = React.useState(mockProfiles[0]);
  const [subscription, setSubscription] = React.useState(mockSubscription);
  const [devices, setDevices] = React.useState([
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
  ]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowUp':
        if (focusedSection > 0) {
          setFocusedSection(prev => prev - 1);
          setFocusedItem(0);
        }
        break;
      case 'ArrowDown':
        if (focusedSection < 2) {
          setFocusedSection(prev => prev + 1);
          setFocusedItem(0);
        }
        break;
      case 'ArrowLeft':
      case 'ArrowRight':
        handleHorizontalNavigation(event.key === 'ArrowRight');
        break;
      case 'Escape':
        navigate('/');
        break;
    }
  };

  const handleHorizontalNavigation = (isRight: boolean) => {
    const getMaxIndex = () => {
      switch (focusedSection) {
        case 0:
          return mockProfiles.length - 1;
        case 1:
          return 1; // Subscription section has 2 focusable elements
        case 2:
          return devices.length - 1;
        default:
          return 0;
      }
    };

    const maxIndex = getMaxIndex();
    setFocusedItem(prev => 
      isRight 
        ? Math.min(prev + 1, maxIndex)
        : Math.max(prev - 1, 0)
    );
  };

  return (
    <Container
      tabIndex={0}
      onKeyDown={handleKeyDown}
      data-testid="settings-container"
      onFocus={() => {
        const { setFocusMode } = useFocus();
        setFocusMode('settings');
      }}
      onBlur={() => {
        const { setFocusMode } = useFocus();
        setFocusMode('none');
      }}
    >
      <Title>Settings</Title>
      <ProfileSection
        currentProfile={currentProfile}
        availableProfiles={mockProfiles}
        onSwitchProfile={(id) => {
          const newProfile = mockProfiles.find(p => p.id === id);
          if (newProfile) setCurrentProfile(newProfile);
        }}
        onUpdateProfile={(profile) => setCurrentProfile(profile)}
        focusedIndex={focusedSection === 0 ? focusedItem : -1}
      />
      <SubscriptionSection
        subscription={subscription}
        onUpdateAutoRenewal={(enabled) =>
          setSubscription(prev => ({ ...prev, autoRenewal: enabled }))
        }
        focusedIndex={focusedSection === 1 ? focusedItem : -1}
      />
      <DeviceSection
        devices={devices}
        onRemoveDevice={(id) =>
          setDevices(prev => prev.filter(device => device.id !== id))
        }
        onRenameDevice={(id, newName) =>
          setDevices(prev =>
            prev.map(device =>
              device.id === id ? { ...device, name: newName } : device
            )
          )
        }
        focusedIndex={focusedSection === 2 ? focusedItem : -1}
      />
    </Container>
  );
};

const Container = styled.div`
  padding: 40px;
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};

  &:focus {
    outline: none;
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 3rem;
  margin-bottom: 40px;
`;

export default SettingsPage;