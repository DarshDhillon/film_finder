import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FilmCard from './FilmCard';
import { getFilmsByTypeAndPageAsync } from '../state/filmsSlice';
import LoadingSpinner from '../assets/images/loading_spinner2.gif';
import Pagination from './Pagination';

const FilmList = () => {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.filmsReducer.films);
  const isLoading = useSelector((state) => state.filmsReducer.isLoading);
  const searchQuery = useSelector((state) => state.filmsReducer.type);

  useEffect(() => {
    dispatch(getFilmsByTypeAndPageAsync({ searchQuery, pageNumber: 1 }));
  }, [searchQuery]);

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
      <Pagination />
    </FilmsContainer>
  );
};

export default FilmList;

const FilmsContainer = styled.div`
  /* border: 1px solid red; */
  /* height: 100vh; */
  width: 100%;
  background-color: transparent;
  padding: 2rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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
