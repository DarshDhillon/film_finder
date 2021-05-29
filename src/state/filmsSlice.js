import { createSlice } from '@reduxjs/toolkit';

const filmsSlice = createSlice({
  name: 'fetched films',
  initialState: {
    films: [],
    type: '',
  },
  reducers: {
    addFilms: (state, { payload }) => {
      state.films = payload.filmList;
      state.type = payload.type;
    },
  },
});

export const { addFilms } = filmsSlice.actions;

export default filmsSlice.reducer;
