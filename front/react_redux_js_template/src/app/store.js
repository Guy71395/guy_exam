import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import sampReducer from '../features/samp/sampSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    samp:sampReducer
  },
});
