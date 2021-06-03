import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FilmCard from './FilmCard';
import { getFilmsByTypeAsync } from '../state/filmsSlice';
import LoadingSpinner from '../assets/images/spinner_red.gif';

const FilmList = () => {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.filmsReducer.films);
  const isLoading = useSelector((state) => state.filmsReducer.isLoading);

  useEffect(() => {
    if (films.length === 0) dispatch(getFilmsByTypeAsync('now_playing'));
  }, []);

  return (
    <FilmsContainer>
      {isLoading ? (
        <Spinner alt='spinner' src={LoadingSpinner} />
      ) : (
        <FilmsWrapper>
          {films.map((film) => (
            <Link
              style={{ textDecoration: 'none' }}
              key={film.id}
              to={`/film/${film.id}`}
            >
              <FilmCard film={film} />
            </Link>
          ))}
        </FilmsWrapper>
      )}
    </FilmsContainer>
  );
};

export default FilmList;

const FilmsContainer = styled.div`
  /* height: 100vh; */
  width: 100%;
  background-color: transparent;
  /* border: 1px solid red; */
  padding: 2rem 0rem;
`;

const FilmsWrapper = styled.div`
  /* border: 1px solid blue; */
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  /* @media screen and (max-width: 1200px) {
    width: 80%;
  } */
`;

const Spinner = styled.img`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -70%);
  border-radius: 1rem;

  @media screen and (max-width: 600px) {
    width: 150px;
  }
`;
