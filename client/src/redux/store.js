import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/user/userSlice.js'; // Adjust the path as needed

export const store = configureStore({
  reducer: { user: userReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
