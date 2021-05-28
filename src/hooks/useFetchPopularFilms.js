import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addPopularFilms } from '../state/popularFilmsSlice';

const API_KEY = process.env.REACT_APP_THE_MOVIE_DB_API_KEY;

const useFetchPopularFilms = () => {
  const dispatch = useDispatch();

  const fetchPopularFilms = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1&region=GB`
      );
      dispatch(addPopularFilms(data.results));
    } catch (error) {
      console.log(error);
    }
  };

  return [fetchPopularFilms];
};

export default useFetchPopularFilms;
