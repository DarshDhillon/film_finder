import styled from 'styled-components';
import useFetchFilms from '../hooks/useFetchFilms';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const FilmListSelector = () => {
  const [fetchFilms] = useFetchFilms();

  const filmType = useSelector((state) => state.filmsReducer.type);

  return (
    <ButtonsContainer>
      <ButtonsWrapper>
        <Link to='/'>
          <FilmsSelectButton
            name='popular'
            $type={filmType}
            onClick={(e) => fetchFilms(e.target.name)}
          >
            Popular
          </FilmsSelectButton>
        </Link>
        <Link to='/'>
          <FilmsSelectButton
            name='top_rated'
            $type={filmType}
            onClick={(e) => fetchFilms(e.target.name)}
          >
            Top Rated
          </FilmsSelectButton>
        </Link>
        <Link to='/'>
          <FilmsSelectButton
            name='upcoming'
            $type={filmType}
            onClick={(e) => fetchFilms(e.target.name)}
          >
            Upcoming
          </FilmsSelectButton>
        </Link>
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
  padding: 2rem 0;
`;

const ButtonsWrapper = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  width: 50%;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 80%;
    justify-content: space-around;
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
    font-size: 0.9rem;
    padding: 0.4rem 0.5rem;
  }
`;
