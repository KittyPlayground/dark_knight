/**
 * Project Name: Dark Knight
 * Author: Kawodya Arachchige
 * Email: kawodya.wa@gmail.com
 * Copyright (c) 2025 TK. All rights reserved.
 * Unauthorized copying of this file, via any medium, is strictly prohibited.
 * Licensed under the MIT license.
 */

import { configureStore } from '@reduxjs/toolkit';
import batmanReducer from './batmanSlice';

export const store = configureStore({
  reducer: {
    batman: batmanReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;