import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FilmCard from './FilmCard';

const FilmList = ({ films }) => {
  return (
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
  );
};

export default FilmList;

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
