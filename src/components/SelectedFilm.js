import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useSelectedFilm from '../hooks/useFetchSelectedFilm';

const SelectedFilm = () => {
  const selectedFilm = useSelector(
    (state) => state.selectedFilmSliceReducer.selectedFilm
  );

  console.log(`here's the other id: ${selectedFilm.id}`);

  const { filmID } = useParams();
  console.log(filmID);

  const [addSelectedFilm] = useSelectedFilm();

  useEffect(() => {
    addSelectedFilm(filmID);
  }, []);

  return <div style={{ color: 'white' }}>You are on the selected film</div>;
};

export default SelectedFilm;
