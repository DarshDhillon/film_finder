import styled from 'styled-components';
import useFetchFilms from '../hooks/useFetchFilms';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const FilmListSelector = () => {
  const [fetchFilms] = useFetchFilms();
  const history = useHistory();

  const filmType = useSelector((state) => state.filmsReducer.type);

  console.log(filmType);

  const handleSelectFilmType = (e) => {
    fetchFilms(e.target.name);
    history.push('/popular');
  };

  return (
    <ButtonsContainer>
      <ButtonsWrapper>
        <FilmsSelectButton
          name='popular'
          $type={filmType}
          onClick={handleSelectFilmType}
        >
          Popular
        </FilmsSelectButton>
        <FilmsSelectButton
          name='top_rated'
          $type={filmType}
          onClick={() => fetchFilms('top_rated')}
        >
          Top Rated
        </FilmsSelectButton>
        <FilmsSelectButton
          name='upcoming'
          $type={filmType}
          onClick={() => fetchFilms('upcoming')}
        >
          Upcoming
        </FilmsSelectButton>
      </ButtonsWrapper>
    </ButtonsContainer>
  );
};

export default FilmListSelector;

const ButtonsContainer = styled.div`
  /* border: 1px solid red; */
  /* height: 200px; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;

const ButtonsWrapper = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  width: 50%;
  justify-content: space-between;

  @media screen and (max-width: 1000px) {
    width: 80%;
  }
`;

const FilmsSelectButton = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: ${({ $type, name }) =>
    $type === name ? '#b91313' : '#416b41'};
  color: #fff;
  border-radius: 0.5rem;
  outline: none;
  border: none;
  font-size: 1.5rem;
  cursor: ${({ $type, name }) => ($type === name ? 'not-allowed' : 'pointer')};

  :hover {
    background-color: ${({ $type, name }) =>
      $type === name ? null : '#215e21'};
  }

  @media screen and (max-width: 1200px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
`;
