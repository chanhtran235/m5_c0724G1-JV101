import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';  // Import reducer từ userSlice

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});
