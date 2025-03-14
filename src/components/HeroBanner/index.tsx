import React from 'react';
import styled from 'styled-components';
import { Content } from '../../types';

interface HeroBannerProps {
  content?: Content;
  isFocused?: boolean;
  'data-testid'?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ 
  content = {
    id: 'featured',
    title: 'Featured Title',
    thumbnailUrl: 'https://example.com/featured.jpg',
    description: 'Watch our featured content now!',
    type: 'movie'
  }, 
  isFocused = false 
}) => {
  return (
    <Container isFocused={isFocused}>
      <BackgroundImage src={content.thumbnailUrl} alt="" />
      <Content>
        <Title>{content.title}</Title>
        <Description>{content.description}</Description>
        <PlayButton isFocused={isFocused}>Play Now</PlayButton>
      </Content>
    </Container>
  );
};

const Container = styled.div<{ isFocused: boolean }>`
  position: relative;
  width: 100%;
  height: 400px;
  margin-bottom: 30px;
  border: ${({ isFocused, theme }) =>
    isFocused ? `4px solid ${theme.colors.primary}` : 'none'};
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s ease;
  transform: scale(${({ isFocused }) => (isFocused ? 1.02 : 1)});
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 40px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 24px;
  max-width: 600px;
`;

const PlayButton = styled.button<{ isFocused: boolean }>`
  padding: 12px 32px;
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transform: scale(${({ isFocused }) => (isFocused ? 1.1 : 1)});
  transition: transform 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export default HeroBanner;