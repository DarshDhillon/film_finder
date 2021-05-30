import { createSlice } from '@reduxjs/toolkit';

const filmsSlice = createSlice({
  name: 'fetched film(s)',
  initialState: {
    films: [],
    searchedFilms: [],
    selectedFilm: {},
    type: '',
  },
  reducers: {
    addFilms: (state, { payload }) => {
      state.films = payload.filmList;
      state.type = payload.type;
    },
    addSearchedFilms: (state, { payload }) => {
      state.searchedFilms = payload.filmList;
      state.type = payload.type;
    },
    addSelectedFilm: (state, { payload }) => {
      state.selectedFilm = payload;
    },
  },
});

export const { addFilms, addSelectedFilm, addSearchedFilms } =
  filmsSlice.actions;

export default filmsSlice.reducer;
