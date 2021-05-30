import styled from 'styled-components';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useSelectedFilm from '../hooks/useFetchSelectedFilm';

const SelectedFilm = () => {
  const selectedFilm = useSelector((state) => state.filmsReducer.selectedFilm);

  const { filmID } = useParams();

  const [addSelectedFilm] = useSelectedFilm();

  console.log(selectedFilm);

  useEffect(() => {
    addSelectedFilm(filmID);
  }, []);

  return <TestDiv></TestDiv>;
};

export default SelectedFilm;

const TestDiv = styled.div`
  /* height: 100vh; */
  /* width: 100%; */
  background-color: orange;
  /* position: absolute; */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
