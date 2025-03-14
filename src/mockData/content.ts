import { Content, ContentRail } from '../types';

export const mockContent: Content[] = [
  {
    id: '1',
    title: 'The Matrix',
    thumbnailUrl: 'https://example.com/matrix.jpg',
    description: 'A computer programmer discovers a mysterious world...',
    type: 'movie'
  },
  {
    id: '2',
    title: 'Breaking Bad',
    thumbnailUrl: 'https://example.com/breaking-bad.jpg',
    description: 'A high school chemistry teacher turns to a life of crime...',
    type: 'series'
  },
  // Add more mock content items
];

export const mockContentRails: ContentRail[] = [
  {
    id: 'trending',
    title: 'Trending Now',
    contents: mockContent
  },
  {
    id: 'continue-watching',
    title: 'Continue Watching',
    contents: mockContent
  },
  {
    id: 'recommended',
    title: 'Recommended for You',
    contents: mockContent
  }
];