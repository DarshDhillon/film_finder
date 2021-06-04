import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FilmCard from './FilmCard';
import LoadingSpinner from '../assets/images/loading_spinner2.gif';
import NoResultsFoundVideo from '../assets/videos/NoResultsFound.mp4';

const SearchedFilms = () => {
  const searchedFilms = useSelector(
    (state) => state.filmsReducer.searchedFilmsData.films
  );
  const isLoading = useSelector(
    (state) => state.filmsReducer.searchedFilmsData.isLoading
  );

  return (
    <FilmsContainer>
      {isLoading ? (
        <Spinner alt='spinner' src={LoadingSpinner} />
      ) : (
        <FilmsWrapper>
          {searchedFilms.length === 0 ? (
            <VideoWrapper>
              <NoResultsVideo
                autoPlay
                src={NoResultsFoundVideo}
              ></NoResultsVideo>
            </VideoWrapper>
          ) : (
            searchedFilms.map((film) => (
              <Link
                style={{ textDecoration: 'none' }}
                key={film.id}
                to={`/film/${film.id}`}
              >
                <FilmCard film={film} />
              </Link>
            ))
          )}
        </FilmsWrapper>
      )}
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

const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* max-width: 70%; */
`;

const NoResultsVideo = styled.video`
  width: 100%;
`;
