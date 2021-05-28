import { createSlice } from '@reduxjs/toolkit';

const popularFilmSlice = createSlice({
  name: 'popular films',
  initialState: {
    popularFilms: [],
  },
  reducers: {
    addPopularFilms: (state, { payload }) => {
      state.popularFilms = payload;
    },
  },
});

export const { addPopularFilms } = popularFilmSlice.actions;

export default popularFilmSlice.reducer;
