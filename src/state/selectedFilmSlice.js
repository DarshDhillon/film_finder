import { createSlice } from '@reduxjs/toolkit';

const selectedFilmSlice = createSlice({
  name: 'selected film',
  initialState: {
    selectedFilm: {},
  },
  reducers: {
    addSelectedFilm: (state, { payload }) => {
      state.selectedFilm = payload;
    },
  },
});

export const { addSelectedFilm } = selectedFilmSlice.actions;

export default selectedFilmSlice.reducer;
