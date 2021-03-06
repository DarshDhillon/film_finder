import styled from 'styled-components';
import { useSelector } from 'react-redux';
import NoImageAvailable from '../assets/images/no_image.png';

const SelectedFilmActors = () => {
  const filmActors = useSelector(
    (state) => state.filmsReducer.selectedFilmData.selectedFilmActors
  );

  return (
    <FilmActorsContainer>
      <FilmActorsWrapper>
        {filmActors.slice(0, 20).map((actor) => (
          <FilmActorCard key={actor.id}>
            <FilmActorImage
              alt={actor.name}
              src={
                !actor.profile_path
                  ? NoImageAvailable
                  : `https://image.tmdb.org/t/p/original/${actor.profile_path}`
              }
            />
            <FilmActorName>{actor.name.slice(0, 25)}</FilmActorName>
            <FilmActorCharacterName>
              {actor.character.slice(0, 25)}
            </FilmActorCharacterName>
          </FilmActorCard>
        ))}
      </FilmActorsWrapper>
    </FilmActorsContainer>
  );
};

export default SelectedFilmActors;

const FilmActorsContainer = styled.div`
  padding: 2rem;
`;

const FilmActorsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const FilmActorCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 250px;
`;

const FilmActorImage = styled.img`
  width: 150px;
  border-radius: 0.2rem;
`;

const FilmActorName = styled.p`
  font-weight: bold;
  color: #fff;
`;

const FilmActorCharacterName = styled.p`
  color: #fff;
  font-style: italic;
`;
