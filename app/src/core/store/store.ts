import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slices/appSlice.ts';
import userReducer from './slices/userSlice.ts';

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;