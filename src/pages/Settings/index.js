import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import SubscriptionSection from './SubscriptionSection';
import ProfileSection from './ProfileSection';
import DeviceSection from './DeviceSection';

const SettingsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  ${({ theme }) => theme.typography.h1};
`;

const Section = styled.section`
  background: ${({ theme }) => theme.colors.background.light};
  border-radius: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Settings = () => {
  const { subscription, profile, devices } = useSelector((state) => state.user);

  return (
    <SettingsContainer>
      <Title>Settings</Title>
      
      <Section>
        <SubscriptionSection subscription={subscription} />
      </Section>
      
      <Section>
        <ProfileSection profile={profile} />
      </Section>
      
      <Section>
        <DeviceSection devices={devices} />
      </Section>
    </SettingsContainer>
  );
};

export default Settings;