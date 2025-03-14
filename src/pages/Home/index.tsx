import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import HeroBanner from '../../components/HeroBanner';
import ContentRail from '../../components/ContentRail';
import { RootState } from '../../store';
import { useFocus } from '../../utils/focusManager';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const { contentRails, featuredContent } = useSelector((state: RootState) => state.content);
  const { setFocusMode } = useFocus();
  const [focusedRail, setFocusedRail] = React.useState(-1); // -1 means hero banner is focused
  const [focusedItem, setFocusedItem] = React.useState(0);

  React.useEffect(() => {
    setFocusMode('rails');
    return () => setFocusMode('none');
  }, [setFocusMode]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowUp':
        setFocusedRail(prev => Math.max(-1, prev - 1));
        setFocusedItem(0);
        break;
      case 'ArrowDown':
        setFocusedRail(prev => Math.min(contentRails.length - 1, prev + 1));
        setFocusedItem(0);
        break;
      case 'ArrowLeft':
        if (focusedRail >= 0) {
          setFocusedItem(prev => Math.max(0, prev - 1));
        }
        break;
      case 'ArrowRight':
        if (focusedRail >= 0) {
          const maxIndex = contentRails[focusedRail].contents.length - 1;
          setFocusedItem(prev => Math.min(maxIndex, prev + 1));
        }
        break;
      case 'Enter':
        // Handle content selection
        if (focusedRail === -1) {
          // Handle hero banner selection
          console.log('Selected hero banner content:', featuredContent);
        } else {
          // Handle rail item selection
          console.log('Selected content:', contentRails[focusedRail].contents[focusedItem]);
        }
        break;
    }
  };

  return (
    <Container 
      onKeyDown={handleKeyDown} 
      data-testid="home-container" 
      tabIndex={0}
      onFocus={() => setFocusMode('rails')}
      onBlur={() => setFocusMode('none')}
    >
      <HeroBanner
        content={featuredContent || undefined}
        isFocused={focusedRail === -1}
        data-testid="hero-banner"
      />
      {contentRails.map((rail, index) => (
        <ContentRail
          key={rail.id}
          title={rail.title}
          contents={rail.contents}
          isFocused={index === focusedRail}
          focusedItemIndex={index === focusedRail ? focusedItem : -1}
          data-testid={`rail-${index}`}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

export default HomePage;