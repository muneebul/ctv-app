import React from 'react';
import styled from 'styled-components';
import Navigation from '../Navigation';

const LayoutWrapper = styled.div`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.background.dark};
`;

const ContentWrapper = styled.main`
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Navigation />
      <ContentWrapper>{children}</ContentWrapper>
    </LayoutWrapper>
  );
};

export default Layout;