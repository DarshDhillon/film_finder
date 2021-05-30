import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addFilms } from '../state/filmsSlice';

const API_KEY = process.env.REACT_APP_THE_MOVIE_DB_API_KEY;

const useFetchFilms = () => {
  const dispatch = useDispatch();

  const fetchFilms = async (searchTerm) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${
          searchTerm ? searchTerm : 'now_playing'
        }?api_key=${API_KEY}&language=en-US&page=1&region=GB`
      );
      dispatch(addFilms({ filmList: data.results, type: searchTerm }));
    } catch (error) {
      console.log(error);
    }
  };

  return [fetchFilms];
};

export default useFetchFilms;
