import { configureStore } from '@reduxjs/toolkit';
import batmanReducer from './batmanSlice';

export const store = configureStore({
  reducer: {
    batman: batmanReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;