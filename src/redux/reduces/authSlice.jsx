import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authState: {
    email: "",
    image: "",
    name: "",
    jabatan: "",
    url: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.authState = action.payload;
    },
    logout: (state, action) => {
      state.authState = action.payload;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
