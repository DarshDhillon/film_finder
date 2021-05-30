import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FilmCard from './FilmCard';

const SearchedFilms = () => {
  const searchedFilms = useSelector(
    (state) => state.filmsReducer.searchedFilms
  );

  return (
    <FilmsContainer>
      <FilmsWrapper>
        {searchedFilms.map((film) => (
          <Link
            style={{ textDecoration: 'none' }}
            key={film.id}
            to={`/film/${film.id}`}
          >
            <FilmCard film={film} />
          </Link>
        ))}
      </FilmsWrapper>
    </FilmsContainer>
  );
};

export default SearchedFilms;

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
