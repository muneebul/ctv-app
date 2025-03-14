import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ContentRail from '../../components/ContentRail';
import HeroBanner from './HeroBanner';

const HomeContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const RailsContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const Home = () => {
  const { heroContent, contentRails, loading, error } = useSelector(
    (state) => state.content
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <HomeContainer>
      <HeroBanner content={heroContent} />
      <RailsContainer>
        {contentRails.map((rail) => (
          <ContentRail key={rail.id} title={rail.title} items={rail.items} />
        ))}
      </RailsContainer>
    </HomeContainer>
  );
};

export default Home;