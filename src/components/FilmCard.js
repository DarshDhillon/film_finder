import styled from 'styled-components';

const changeDateOrder = (date) => {
  let newDateOrder = date.split(/\s*\-\s*/g);
  return `${newDateOrder[2]}-${newDateOrder[1]}-${newDateOrder[0]}`;
};

const FilmCard = ({ film }) => {
  console.log(film);
  return (
    <FilmCardContainer>
      <FilmCardPosterImage
        alt={film.title}
        src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
      />
      <FilmInfoContainer>
        <FilmTitle>{film.title}</FilmTitle>
        <FilmReleaseDate>
          Release date: {changeDateOrder(film.release_date)}
        </FilmReleaseDate>
        <FilmVoteAverage>{film.vote_average}</FilmVoteAverage>
      </FilmInfoContainer>
    </FilmCardContainer>
  );
};
// moment().format("MMM Do YY");
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
  padding: 1rem;
  justify-content: space-around;
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

const FilmVoteAverage = styled.h4`
  color: orange;
  text-align: center;
  border-radius: 50%;
  border: 1px solid #fff;
  padding: 0.5rem;
`;
