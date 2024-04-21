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
      (state.authState.email = action.payload?.email
        ? action.payload.email
        : state.authState.email),
        (state.authState.image = action.payload?.image
          ? action.payload.image
          : state.authState.image),
        (state.authState.jabatan = action.payload?.jabatan
          ? action.payload.jabatan
          : state.authState.jabatan),
        (state.authState.name = action.payload?.name
          ? action.payload.name
          : state.authState.name),
        (state.authState.url = action.payload?.url
          ? action.payload.url
          : state.authState.url);
    },
    logout: (state, action) => {
      state.authState = initialState.authState;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
