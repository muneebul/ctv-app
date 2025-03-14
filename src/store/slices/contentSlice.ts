import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Content, ContentRail } from '../../types';
import { mockContent, mockContentRails } from '../../mockData/content';

interface ContentState {
  featuredContent: Content | null;
  contentRails: ContentRail[];
  loading: boolean;
  error: string | null;
}

const initialState: ContentState = {
  featuredContent: mockContent[0],
  contentRails: mockContentRails,
  loading: false,
  error: null
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    setFeaturedContent: (state, action: PayloadAction<Content>) => {
      state.featuredContent = action.payload;
    },
    setContentRails: (state, action: PayloadAction<ContentRail[]>) => {
      state.contentRails = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  }
});

export const { setFeaturedContent, setContentRails, setLoading, setError } = contentSlice.actions;
export default contentSlice.reducer;