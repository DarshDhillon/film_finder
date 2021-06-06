import styled from 'styled-components';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getFilmDataAsync, clearSelectedFilm } from '../state/filmsSlice';
import LoadingSpinner from '../assets/images/loading_spinner2.gif';
import { AiOutlineCalendar } from 'react-icons/ai';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import SelectedFilmActors from './SelectedFilmActors';
import SelectedFilmGallery from './SelectedFilmGallery';

const SelectedFilm = () => {
  const { filmID } = useParams();
  const dispatch = useDispatch();

  const selectedFilmData = useSelector(
    (state) => state.filmsReducer.selectedFilmData
  );

  const isLoading = useSelector(
    (state) => state.filmsReducer.selectedFilmData.isLoading
  );

  const changeDateOrder = (date) => {
    let newDateOrder = date.split(/\s*-\s*/g);
    return `${newDateOrder[2]}-${newDateOrder[1]}-${newDateOrder[0]}`;
  };

  useEffect(() => {
    dispatch(getFilmDataAsync(filmID));

    return () => dispatch(clearSelectedFilm());
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner alt='spinner' src={LoadingSpinner} />
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
                <FilmFootnotes>
                  <DateWrapper>
                    <CalendarIcon />
                    <FilmReleaseDate>
                      {selectedFilmData.selectedFilm.release_date &&
                        changeDateOrder(
                          selectedFilmData.selectedFilm.release_date
                        )}
                    </FilmReleaseDate>
                  </DateWrapper>
                  <RuntimeWrapper>
                    <ClockIcon />
                    <FilmRuntime>
                      {selectedFilmData.selectedFilm.runtime} mins
                    </FilmRuntime>
                  </RuntimeWrapper>
                  <BudgetWrapper>
                    <BudgetIcon />
                    <FilmBudget>
                      ${selectedFilmData.selectedFilm.budget.toLocaleString()}
                    </FilmBudget>
                  </BudgetWrapper>
                </FilmFootnotes>
              </FilmInfo>
            </FilmInfoContainer>
            <SelectedFilmActors />
          </FilmWrapper>
          <SelectedFilmGallery />
        </FilmContainer>
      )}
    </>
  );
};

export default SelectedFilm;

const FilmContainer = styled.div`
  /* border: 1px solid orange; */
  width: 100%;
`;

const FilmWrapper = styled.div`
  /* border: 1px solid #fff; */
  padding: 0.5rem;
  margin: 0 auto;
  width: 60%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 1rem 1rem 0 0;
  flex-wrap: wrap;

  @media screen and (max-width: 1200px) {
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

const FilmInfoContainer = styled.div`
  display: flex;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FilmPoster = styled.img`
  width: 300px;
  border-radius: 1rem;

  @media screen and (max-width: 600px) {
    width: 250px;
  }
`;

const FilmInfo = styled.div`
  /* border: 1px solid red; */
  padding: 0.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* width: 100%; */

  @media screen and (max-width: 1200px) {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

const FilmTitle = styled.h1`
  color: yellow;

  @media screen and (max-width: 1200px) {
    margin-bottom: 1rem;
  }
`;

const FilmTagline = styled.h2`
  color: #fff;
  font-style: italic;

  @media screen and (max-width: 1200px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`;

const FilmOverview = styled.h3`
  color: #fff;

  @media screen and (max-width: 1200px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const FilmGenreWrapper = styled.div`
  /* border: 1px solid yellow; */
  width: 80%;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* align-items: center; */

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const FilmGenre = styled.h3`
  padding: 0.5rem 0.5rem;
  border-radius: 0.5rem;
  color: #fff;
  background-color: #8b2020;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 1200px) {
    font-size: 0.7rem;
    margin-bottom: 1rem;
  }
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

const FilmFootnotes = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 600px) {
    font-size: 0.7rem;
    justify-content: space-between;
  }
`;

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const FilmReleaseDate = styled.p`
  /* font-size: 1.5rem; */
  color: #fff;
`;

const CalendarIcon = styled(AiOutlineCalendar)`
  color: yellow;
  margin-right: 0.5rem;
  /* font-size: 1.5rem; */
`;

const RuntimeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const FilmRuntime = styled.p`
  /* font-size: 1.5rem; */
  color: #fff;
`;

const ClockIcon = styled(AiOutlineClockCircle)`
  color: yellow;
  margin-right: 0.5rem;
  /* font-size: 1.5rem; */
`;

const BudgetWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const FilmBudget = styled.p`
  /* font-size: 1.5rem; */
  color: #fff;
`;

const BudgetIcon = styled(FaRegMoneyBillAlt)`
  color: yellow;
  margin-right: 0.5rem;
  /* font-size: 1.5rem; */
`;
