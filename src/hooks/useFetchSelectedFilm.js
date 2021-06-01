import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addSelectedFilm, setLoading } from '../state/filmsSlice';

const API_KEY = process.env.REACT_APP_THE_MOVIE_DB_API_KEY;

const useFetchSelectedFilm = () => {
  const dispatch = useDispatch();

  const fetchSelectedFilm = (filmID) => {
    dispatch(setLoading(true));
    const film = `https://api.themoviedb.org/3/movie/${filmID}?api_key=${API_KEY}&language=en-US&page=1&region=GB`;
    const filmActors = `https://api.themoviedb.org/3/movie/${filmID}/credits?api_key=${API_KEY}`;
    const filmImages = `https://api.themoviedb.org/3/movie/${filmID}/images?api_key=${API_KEY}`;
    const filmRecommendations = `https://api.themoviedb.org/3/movie/${filmID}/recommendations?api_key=${API_KEY}`;

    const requestOne = axios.get(film);
    const requestTwo = axios.get(filmActors);
    const requestThree = axios.get(filmImages);
    const requestFour = axios.get(filmRecommendations);

    axios
      .all([requestOne, requestTwo, requestThree, requestFour])
      .then(
        axios.spread((...responses) => {
          dispatch(
            addSelectedFilm({
              selectedFilm: responses[0].data,
              selectedFilmActors: responses[1].data.cast,
              selectedFilmImages: responses[2].data.backdrops,
              selectedFilmRecommendations: responses[3].data.results,
              type: 'selected_film',
            })
          );
        })
      )
      .catch((errors) => {
        console.log(errors);
      })
      .finally(dispatch(setLoading(false)));
  };

  return [fetchSelectedFilm];
};

export default useFetchSelectedFilm;
