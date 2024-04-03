import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./reduces/authSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
    }
})