import styled from 'styled-components';
import { getFilmsByTypeAndPageAsync } from '../state/filmsSlice';
import { useSelector, useDispatch } from 'react-redux';

const Pagination = () => {
  const dispatch = useDispatch();

  const totalResults = useSelector((state) => state.filmsReducer.totalResults);
  const currentPage = useSelector((state) => state.filmsReducer.currentPage);
  const searchTerm = useSelector((state) => state.filmsReducer.type);

  const nextPage = (pageNumber) => {
    dispatch(getFilmsByTypeAndPageAsync({ searchTerm, pageNumber }));
  };

  const numberOfPages = Math.floor(totalResults / 20);
  const pageLinks = [];

  for (let i = 1; i <= numberOfPages + 1; i++) {
    pageLinks.push(
      <Button key={i} onClick={() => nextPage(i)}>
        {i}
      </Button>
    );
  }

  return <div>{totalResults > 20 && <ul>{pageLinks}</ul>}</div>;
};

export default Pagination;

const Button = styled.button`
  padding: 1rem;
  background: orange;
`;
