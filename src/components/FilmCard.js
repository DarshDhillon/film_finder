import styled from 'styled-components';
import NoImageAvailable from '../assets/images/no_image.png';

const changeDateOrder = (date) => {
  let newDateOrder = date.split(/\s*-\s*/g);
  return `${newDateOrder[2]}-${newDateOrder[1]}-${newDateOrder[0]}`;
};

const FilmCard = ({ film }) => {
  return (
    <FilmCardContainer>
      <FilmCardPosterImage
        alt={film.title}
        src={
          !film.poster_path
            ? NoImageAvailable
            : `https://image.tmdb.org/t/p/original/${film.poster_path}`
        }
      />
      <FilmInfoContainer>
        <FilmTitle>{film.title}</FilmTitle>
        <FilmReleaseDate>
          Release date:{' '}
          {film.release_date && changeDateOrder(film.release_date)}
        </FilmReleaseDate>
        <FilmVoteAverage>{film.vote_average}</FilmVoteAverage>
      </FilmInfoContainer>
    </FilmCardContainer>
  );
};
export default FilmCard;

const FilmCardContainer = styled.div`
  border: 1px solid #fff;
  margin: 0 10px 50px 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: 250px;

  :hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 500px) {
    width: 200px;
  }
`;

const FilmCardPosterImage = styled.img`
  max-width: 100%;
`;

const FilmInfoContainer = styled.div`
  background-color: #8b2020;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 1rem;
  justify-content: space-between;
`;

const FilmTitle = styled.h4`
  color: #fff;
  text-align: center;
  font-style: italic;
`;

const FilmReleaseDate = styled.h4`
  color: #fff;
  text-align: center;
`;

const FilmVoteAverage = styled.p`
  display: block;
  height: 40px;
  width: 40px;
  line-height: 35px;

  -moz-border-radius: 30px;
  border-radius: 30px;

  background-color: transparent;
  border: 2px solid orange;
  color: white;
  text-align: center;
  font-size: 1rem;
`;
