import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import contentReducer from './slices/contentSlice';
import settingsReducer from './slices/settingsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    content: contentReducer,
    settings: settingsReducer,
  },
});