import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: {},
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getInitialUserPending: (state) => {
      state.isLoading = true;
    },

    loginUserPending: (state) => {
      state.isLoading = true;
    },
    loginUserFullfilled: (state, action) => {
      state.profile = action.payload;
      state.error = null;
      state.isLoading = false;
    },
    loginUserRejected: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    logoutUserPending: (state) => {
      state.isLoading = true;
    },
    logoutUserFullfilled: (state) => {
      state.profile = {};
      state.error = null;
      state.isLoading = false;
    },
    logoutUserRejected: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    registerUserPending: (state) => {
      state.isLoading = true;
    },
  },
});

export default userSlice.reducer;
export const { actions: userActions } = userSlice;
