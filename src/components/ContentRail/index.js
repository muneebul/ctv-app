import React from 'react';
import styled from 'styled-components';

const RailContainer = styled.div`
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

const Title = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const ItemsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  overflow-x: hidden;
  padding: ${({ theme }) => theme.spacing.sm} 0;
`;

const ContentItem = styled.div`
  flex: 0 0 auto;
  width: 200px;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.background.light};
  border-radius: ${({ theme }) => theme.spacing.sm};
  overflow: hidden;
  position: relative;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ItemTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${({ theme }) => theme.spacing.sm};
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: ${({ theme }) => theme.colors.text.primary};
`;

const ContentRail = ({ title, items }) => {
  return (
    <RailContainer data-rail>
      <Title>{title}</Title>
      <ItemsContainer>
        {items.map((item, index) => (
          <ContentItem
            key={item.id}
            className="focusable"
            tabIndex={0}
            onClick={() => console.log('Selected:', item.title)}
          >
            <ItemImage src={item.image} alt={item.title} />
            <ItemTitle>{item.title}</ItemTitle>
          </ContentItem>
        ))}
      </ItemsContainer>
    </RailContainer>
  );
};

export default ContentRail;