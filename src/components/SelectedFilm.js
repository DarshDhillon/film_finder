import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useSelectedFilm from '../hooks/useFetchSelectedFilm';
import LoadingSpinner from '../assets/images/loading_spinner2.gif';
import { AiOutlineCalendar } from 'react-icons/ai';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaRegMoneyBillAlt } from 'react-icons/fa';

const SelectedFilm = () => {
  const { filmID } = useParams();
  const [fetchSelectedFilm] = useSelectedFilm();
  const [isLoading, setIsLoading] = useState(true);

  const selectedFilmData = useSelector(
    (state) => state.filmsReducer.selectedFilmData
  );

  const changeDateOrder = (date) => {
    let newDateOrder = date.split(/\s*-\s*/g);
    return `${newDateOrder[2]}-${newDateOrder[1]}-${newDateOrder[0]}`;
  };

  setTimeout(() => {
    setIsLoading(false);
  }, 500);

  useEffect(() => {
    fetchSelectedFilm(filmID);
  }, []);

  console.log(selectedFilmData.selectedFilm);

  return (
    <>
      {isLoading ? (
        <Spinner alt='timer' src={LoadingSpinner} />
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
                      {changeDateOrder(
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
          </FilmWrapper>
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
  border-radius: 1rem;
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

  @media screen and (max-width: 600px) {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

const FilmTitle = styled.h1`
  color: yellow;
`;

const FilmTagline = styled.h2`
  color: #fff;

  @media screen and (max-width: 600px) {
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
  justify-content: space-evenly;
`;

const FilmGenre = styled.h3`
  padding: 0.5rem 0.5rem;
  border-radius: 0.5rem;
  color: #fff;
  background-color: #8b2020;

  @media screen and (max-width: 600px) {
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
