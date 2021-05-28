import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useFetchPopularFilms from '../hooks/useFetchPopularFilms';
import FilmCard from './FilmCard';

const PopularFilmList = () => {
  const popularFilms = useSelector(
    (state) => state.popularFilmReducer.popularFilms
  );

  console.log(popularFilms);

  const [fetchPopularFilms] = useFetchPopularFilms();

  useEffect(() => {
    fetchPopularFilms();
  }, []);

  return (
    <PopularFilmsContainer>
      <PopularFilmsWrapper>
        {popularFilms.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}
      </PopularFilmsWrapper>
    </PopularFilmsContainer>
  );
};

export default PopularFilmList;

const PopularFilmsContainer = styled.div`
  /* height: 100vh; */
  width: 100%;
  background-color: transparent;
  /* border: 1px solid blue; */
  padding: 2rem;
`;

const PopularFilmsWrapper = styled.div`
  /* border: 1px solid blue; */
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
