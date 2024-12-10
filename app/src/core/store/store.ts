import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slices/appSlice.ts';
import userReducer from './slices/userSlice.ts';
import formulationReducer from './slices/formulationSlice.ts';

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    formulation: formulationReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;