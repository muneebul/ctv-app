export const mockContentData = {
  hero: {
    id: 'hero1',
    title: 'Stranger Things',
    description: 'A thrilling new season of supernatural mysteries and adventures.',
    image: 'https://placehold.co/1920x1080',
    type: 'series',
  },
  rails: [
    {
      id: 'continue-watching',
      title: 'Continue Watching',
      items: [
        {
          id: 'cw1',
          title: 'The Crown',
          image: 'https://placehold.co/300x450',
          progress: 0.7
        },
        {
          id: 'cw2',
          title: 'Breaking Bad',
          image: 'https://placehold.co/300x450',
          progress: 0.3
        }
      ]
    },
    {
      id: 'trending',
      title: 'Trending Now',
      items: [
        {
          id: 't1',
          title: 'Wednesday',
          image: 'https://placehold.co/300x450'
        },
        {
          id: 't2',
          title: 'The Witcher',
          image: 'https://placehold.co/300x450'
        }
      ]
    },
    {
      id: 'recommended',
      title: 'Recommended for You',
      items: [
        {
          id: 'r1',
          title: 'Dark',
          image: 'https://placehold.co/300x450'
        },
        {
          id: 'r2',
          title: 'Ozark',
          image: 'https://placehold.co/300x450'
        }
      ]
    }
  ]
};

export const mockUserData = {
  subscription: {
    plan: 'Premium',
    expiryDate: '2024-06-30',
    status: 'active',
    features: ['4K UHD', 'Multiple Devices', 'Ad-free']
  },
  profile: {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://placehold.co/150x150',
    language: 'English',
    parentalControls: 'PG-13'
  },
  devices: [
    {
      id: 'd1',
      name: 'Living Room TV',
      type: 'Smart TV',
      lastActive: '2023-06-30T10:00:00Z'
    },
    {
      id: 'd2',
      name: 'Bedroom TV',
      type: 'Roku',
      lastActive: '2023-06-29T20:30:00Z'
    },
    {
      id: 'd3',
      name: 'Mobile Phone',
      type: 'iOS',
      lastActive: '2023-06-30T08:15:00Z'
    }
  ]
};