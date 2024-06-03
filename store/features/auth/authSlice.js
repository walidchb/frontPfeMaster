// store/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userAuth: null,
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    loginRequest: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      // console.log("action.payload");

      // console.log(action.payload);
      state.userAuth = action.payload.userAuth;

      state.user = action.payload.user;
      state.loading = false;
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    logoutRequest: (state) => {
      state.loading = true;
    },
    logoutSuccess: (state) => {
      state.user = null;
      state.loading = false;
    },
    logoutFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
} = authSlice.actions;

export default authSlice.reducer;
