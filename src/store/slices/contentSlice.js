import { createSlice } from '@reduxjs/toolkit';
import { mockContentData } from '../../mockData';

const initialState = {
  heroContent: mockContentData.hero,
  contentRails: mockContentData.rails,
  loading: false,
  error: null,
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    setHeroContent: (state, action) => {
      state.heroContent = action.payload;
    },
    setContentRails: (state, action) => {
      state.contentRails = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setHeroContent,
  setContentRails,
  setLoading,
  setError,
} = contentSlice.actions;

export default contentSlice.reducer;