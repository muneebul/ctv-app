import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'dark',
  autoplay: true,
  subtitles: false,
  quality: 'auto',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
    toggleAutoplay: (state) => {
      state.autoplay = !state.autoplay;
    },
    toggleSubtitles: (state) => {
      state.subtitles = !state.subtitles;
    },
    setQuality: (state, action) => {
      state.quality = action.payload;
    },
  },
});

export const {
  toggleTheme,
  toggleAutoplay,
  toggleSubtitles,
  setQuality,
} = settingsSlice.actions;

export default settingsSlice.reducer;