import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authData",
  initialState: {
    profile: {
      name: "",
      email: "",
      picture: "",
    },
    requestToken: "",
    error: "",
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    onSuccess: (state, action) => {
      state.profile = {
        name: action.payload.name,
        picture: action.payload.picture,
        email: action.payload.email,
      };
    },
    onError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUser, onError, onSuccess } = authSlice.actions;

export default authSlice.reducer;
