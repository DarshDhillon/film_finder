import styled from 'styled-components';

const FilmCard = ({ film }) => {
  return (
    <FilmCardContainer>
      <FilmCardPosterImage
        alt={film.title}
        src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
      />
    </FilmCardContainer>
  );
};

export default FilmCard;

const FilmCardContainer = styled.div`
  border: 1px solid #fff;
  margin: 0 10px 50px 10px;
`;

const FilmCardPosterImage = styled.img`
  width: 250px;
`;
