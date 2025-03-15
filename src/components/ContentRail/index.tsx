import React from 'react';
import styled from 'styled-components';
import { Content } from '../../types';

interface ContentRailProps {
  title: string;
  contents: Content[];
  isFocused: boolean;
  focusedItemIndex: number;
  'data-testid'?: string;
}

const ContentRail: React.FC<ContentRailProps> = ({
  title,
  contents,
  isFocused,
  focusedItemIndex
}) => {
  return (
    <Container isFocused={isFocused}>
      <Title>{title}</Title>
      <ItemsContainer>
        {contents.map((content, index) => (
          <ContentItem
            key={content.id}
            isFocused={isFocused && index === focusedItemIndex}
          >
            <Thumbnail src={content.thumbnailUrl} alt={content.title} />
            <ItemTitle>{content.title}</ItemTitle>
          </ContentItem>
        ))}
      </ItemsContainer>
    </Container>
  );
};

const Container = styled.div<{ isFocused?: boolean }>`
  margin: 20px 0;
  border: ${({ isFocused, theme }) =>
    isFocused ? `2px solid ${theme.colors.primary}` : 'none'};
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
`;

const ItemsContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  gap: 10px;
`;

const ContentItem = styled.div<{ isFocused: boolean }>`
  flex-shrink: 0;
  width: 200px;
  transform: scale(${({ isFocused }) => (isFocused ? 1.02 : 1)});
  transition: all 0.3s ease;
  border: ${({ isFocused, theme }) =>
    isFocused ? `2px solid ${theme.colors.primary}` : 'none'};
  padding: 8px;
  border-radius: 4px;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;

const ItemTitle = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-top: 8px;
  font-size: 14px;
`;

export default ContentRail;