import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const FilmListSelector = () => {
  const filmType = useSelector((state) => state.filmsReducer.type);

  return (
    <ButtonsContainer>
      <ButtonsWrapper>
        <Link to='/'>
          <FilmsSelectButton name='now_playing' $type={filmType}>
            Now playing
          </FilmsSelectButton>
        </Link>
        <Link to='/popular'>
          <FilmsSelectButton name='popular' $type={filmType}>
            Popular
          </FilmsSelectButton>
        </Link>
        <Link to='/top_rated'>
          <FilmsSelectButton name='top_rated' $type={filmType}>
            Top Rated
          </FilmsSelectButton>
        </Link>
        <Link to='/upcoming'>
          <FilmsSelectButton name='upcoming' $type={filmType}>
            Upcoming
          </FilmsSelectButton>
        </Link>
      </ButtonsWrapper>
    </ButtonsContainer>
  );
};

export default FilmListSelector;

const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: space-around;
  }
`;

const FilmsSelectButton = styled.button`
  padding: 0.5rem 1rem;
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
