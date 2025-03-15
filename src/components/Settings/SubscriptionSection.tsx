import React from 'react';
import styled from 'styled-components';
import { Subscription } from '../../types';

interface SubscriptionSectionProps {
  subscription: Subscription;
  onUpdateAutoRenewal: (enabled: boolean) => void;
  focusedIndex: number;
}

const SubscriptionSection: React.FC<SubscriptionSectionProps> = ({
  subscription,
  onUpdateAutoRenewal,
  focusedIndex
}) => {
  return (
    <Section>
      <Title>Subscription Details</Title>
      <SubscriptionInfo isFocused={focusedIndex === 0}>
        <PlanType>
          Plan: <Value>{subscription.plan}</Value>
        </PlanType>
        <Status>
          Status:{' '}
          <Value status={subscription.status}>{subscription.status}</Value>
        </Status>
        <ExpiryDate>
          Expiry Date: <Value>{subscription.expiryDate}</Value>
        </ExpiryDate>
        <RenewalToggle
          isFocused={focusedIndex === 1}
          onClick={() => onUpdateAutoRenewal(!subscription.autoRenewal)}
        >
          Auto-Renewal: {subscription.autoRenewal ? 'Enabled' : 'Disabled'}
        </RenewalToggle>
      </SubscriptionInfo>
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

const SubscriptionInfo = styled.div<{ isFocused: boolean }>`
  padding: 24px;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 12px;
  transform: scale(${({ isFocused }) => (isFocused ? 1.02 : 1)});
  border: ${({ isFocused, theme }) =>
    isFocused ? `2px solid ${theme.colors.primary}` : 'none'};
  transition: all 0.3s ease;
`;

const PlanType = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  margin-bottom: 12px;
`;

const Status = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  margin-bottom: 12px;
`;

const ExpiryDate = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  margin-bottom: 20px;
`;

const Value = styled.span<{ status?: string }>`
  color: ${({ theme, status }) =>
    status === 'active'
      ? theme.colors.success
      : status === 'expired'
      ? theme.colors.error
      : theme.colors.textHighlight};
  font-weight: bold;
`;

const RenewalToggle = styled.button<{ isFocused: boolean }>`
  padding: 12px 24px;
  background: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transform: scale(${({ isFocused }) => (isFocused ? 1.02 : 1)});
  border: ${({ isFocused, theme }) =>
    isFocused ? `2px solid ${theme.colors.primary}` : 'none'};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export default SubscriptionSection;