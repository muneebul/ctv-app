import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.spacing.md};
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  }
`;

const Content = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.xl};
  left: ${({ theme }) => theme.spacing.xl};
  right: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  ${({ theme }) => theme.typography.h1};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 600px;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  ${({ theme }) => theme.typography.body};
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  border: none;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: ${({ theme }) => theme.spacing.sm};
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.2s;

  &.focusable:focus {
    transform: scale(1.1);
  }
`;

const HeroBanner = ({ content }) => {
  return (
    <BannerContainer bgImage={content.image}>
      <Content>
        <Title>{content.title}</Title>
        <Description>{content.description}</Description>
        <Button className="focusable" onClick={() => console.log('Play clicked')}>
          Play Now
        </Button>
      </Content>
    </BannerContainer>
  );
};

export default HeroBanner;