import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addSelectedFilm } from '../state/selectedFilmSlice';

const API_KEY = process.env.REACT_APP_THE_MOVIE_DB_API_KEY;

const useFetchSelectedFilm = () => {
  const dispatch = useDispatch();

  const fetchSelectedFilm = async (filmID) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${filmID}?api_key=${API_KEY}&language=en-US&page=1&region=GB`
      );
      dispatch(addSelectedFilm(data));
    } catch (error) {
      console.log(error);
    }
  };

  return [fetchSelectedFilm];
};

export default useFetchSelectedFilm;
