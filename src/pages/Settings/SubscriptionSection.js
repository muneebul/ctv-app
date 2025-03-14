import React from 'react';
import styled from 'styled-components';

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  ${({ theme }) => theme.typography.h2};
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Label = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const Value = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding-left: ${({ theme }) => theme.spacing.md};
`;

const Feature = styled.li`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  
  &:before {
    content: '✓';
    color: ${({ theme }) => theme.colors.primary};
    margin-right: ${({ theme }) => theme.spacing.sm};
  }
`;

const SubscriptionSection = ({ subscription }) => {
  return (
    <>
      <SectionTitle>Subscription Details</SectionTitle>
      <InfoGrid>
        <Label>Current Plan</Label>
        <Value>{subscription.plan}</Value>
        
        <Label>Status</Label>
        <Value>{subscription.status}</Value>
        
        <Label>Expiry Date</Label>
        <Value>{new Date(subscription.expiryDate).toLocaleDateString()}</Value>
        
        <Label>Features</Label>
        <FeaturesList>
          {subscription.features.map((feature) => (
            <Feature key={feature}>{feature}</Feature>
          ))}
        </FeaturesList>
      </InfoGrid>
    </>
  );
};

export default SubscriptionSection;