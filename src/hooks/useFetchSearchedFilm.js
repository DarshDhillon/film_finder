import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addFilms } from '../state/filmsSlice';

const API_KEY = process.env.REACT_APP_THE_MOVIE_DB_API_KEY;

const useFetchSearchedFilm = () => {
  const dispatch = useDispatch();

  const fetchSearchedFilm = async (searchQuery) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
      );
      console.log(data);
      dispatch(addFilms({ filmList: data.results, type: searchQuery }));
    } catch (error) {
      console.log(error);
    }
  };

  return [fetchSearchedFilm];
};

export default useFetchSearchedFilm;
