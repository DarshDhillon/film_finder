import { configureStore } from '@reduxjs/toolkit';
import filmsReducer from './filmsSlice';
import selectedFilmSliceReducer from './selectedFilmSlice';

const store = configureStore({
  reducer: {
    filmsReducer,
    selectedFilmSliceReducer,
  },
});

export default store;
