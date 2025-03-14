import { createSlice } from '@reduxjs/toolkit';
import { mockUserData } from '../../mockData';

const initialState = {
  subscription: mockUserData.subscription,
  profile: mockUserData.profile,
  devices: mockUserData.devices,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      state.profile = { ...state.profile, ...action.payload };
    },
    removeDevice: (state, action) => {
      state.devices = state.devices.filter(device => device.id !== action.payload);
    },
    renameDevice: (state, action) => {
      const { id, name } = action.payload;
      const device = state.devices.find(d => d.id === id);
      if (device) {
        device.name = name;
      }
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
  updateProfile,
  removeDevice,
  renameDevice,
  setLoading,
  setError,
} = userSlice.actions;

export default userSlice.reducer;