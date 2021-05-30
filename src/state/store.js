import { configureStore } from '@reduxjs/toolkit';
import filmsReducer from './filmsSlice';

const store = configureStore({
  reducer: {
    filmsReducer,
  },
});

export default store;
