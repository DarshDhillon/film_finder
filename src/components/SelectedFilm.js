import styled from 'styled-components';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useSelectedFilm from '../hooks/useFetchSelectedFilm';

const SelectedFilm = () => {
  const { filmID } = useParams();
  const [addSelectedFilm] = useSelectedFilm();

  useEffect(() => {
    addSelectedFilm(filmID);
  }, []);

  const isLoading = useSelector((state) => state.filmsReducer.isLoading);

  const selectedFilmData = useSelector(
    (state) => state.filmsReducer.selectedFilmData
  );

  console.log(selectedFilmData.selectedFilm.genres);

  return (
    <>
      {isLoading ? (
        <p style={{ color: '#fff' }}>Please wait</p>
      ) : (
        <FilmContainer>
          <FilmWrapper>
            <FilmInfoContainer>
              <FilmPoster
                src={`https://image.tmdb.org/t/p/original/${selectedFilmData.selectedFilm.poster_path}`}
              />
              <FilmInfo>
                <FilmTitle>{selectedFilmData.selectedFilm.title}</FilmTitle>
                <FilmTagline>
                  {selectedFilmData.selectedFilm.tagline}
                </FilmTagline>
                <FilmOverview>
                  {selectedFilmData.selectedFilm.overview}
                </FilmOverview>
                <FilmGenreWrapper>
                  {selectedFilmData.selectedFilm.genres.map((genre) => (
                    <FilmGenre key={genre.id}>{genre.name}</FilmGenre>
                  ))}
                </FilmGenreWrapper>
              </FilmInfo>
            </FilmInfoContainer>
          </FilmWrapper>
        </FilmContainer>
      )}
    </>
  );
};

export default SelectedFilm;

const FilmContainer = styled.div`
  width: 100%;
  /* border: 1px solid orange; */
`;

const FilmWrapper = styled.div`
  /* border: 1px solid #fff; */
  padding: 0.5rem;
  margin: 0 auto;
  width: 60%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 1rem;
`;

const FilmInfoContainer = styled.div`
  display: flex;
`;

const FilmPoster = styled.img`
  width: 300px;
`;

const FilmInfo = styled.div`
  /* border: 1px solid red; */
  padding: 0.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* width: 100%; */
`;

const FilmTitle = styled.h1`
  color: yellow;
`;

const FilmTagline = styled.h2`
  color: #fff;
`;

const FilmOverview = styled.h3`
  color: #fff;
`;

const FilmGenreWrapper = styled.div`
  /* border: 1px solid yellow; */
  width: 70%;
  padding: 0.5rem;
  display: flex;
  justify-content: space-evenly;
`;

const FilmGenre = styled.h3`
  padding: 0.5rem 0.8rem;
  border-radius: 0.5rem;
  color: #fff;
  background-color: #8b2020;
`;
