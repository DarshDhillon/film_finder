import { useEffect } from 'react';
import { getFilmsByTypeAndPageAsync } from '../state/filmsSlice';
import LoadingSpinner from '../assets/images/loading_spinner2.gif';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import FilmList from '../components/FilmList';
import Pagination from '../components/Pagination';

const TopRated = () => {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.filmsReducer.films);
  const isLoading = useSelector((state) => state.filmsReducer.isLoading);
  const totalResults = useSelector((state) => state.filmsReducer.totalResults);
  const numberOfPages = Math.round(totalResults / 20);

  useEffect(() => {
    dispatch(
      getFilmsByTypeAndPageAsync({ searchQuery: 'top_rated', pageNumber: 1 })
    );
  }, []);

  const handlePageClick = (e) => {
    const pageNumber = e.selected + 1;
    dispatch(
      getFilmsByTypeAndPageAsync({ searchQuery: 'top_rated', pageNumber })
    );
  };

  return (
    <FilmsContainer>
      {isLoading ? (
        <Spinner alt='spinner' src={LoadingSpinner} />
      ) : (
        <FilmList films={films} />
      )}
      <Pagination
        numberOfPages={numberOfPages}
        handlePageClick={handlePageClick}
      />
    </FilmsContainer>
  );
};

export default TopRated;

const FilmsContainer = styled.div`
  width: 100%;
  background-color: transparent;
  padding: 2rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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
