import { configureStore } from '@reduxjs/toolkit';
import popularFilmReducer from './popularFilmsSlice';

const store = configureStore({
  reducer: {
    popularFilmReducer,
  },
});

export default store;
