import { useEffect } from 'react';
import styled from 'styled-components';
import { getFilmsByTypeAndPageAsync } from '../state/filmsSlice';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';

const Pagination = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.filmsReducer.type);

  const handlePageClick = (e) => {
    const pageNumber = e.selected + 1;
    dispatch(getFilmsByTypeAndPageAsync({ searchQuery, pageNumber }));
  };

  const totalResults = useSelector((state) => state.filmsReducer.totalResults);
  const numberOfPages = Math.round(totalResults / 20);

  useEffect(() => {
    console.log('updated');
  }, [numberOfPages]);

  return (
    <PaginationContainer>
      <ReactPaginate
        previousLabel='&larr;'
        nextLabel='&rarr;'
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={numberOfPages}
        marginPagesDisplayed={2}
        initialPage={0}
        // disableInitialCallback={true}
        forcePage={0}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </PaginationContainer>
  );
};

export default Pagination;

const PaginationContainer = styled.div`
  .pagination {
    margin: 15px auto;
    display: flex;
    list-style: none;
    outline: none;
  }

  .pagination > li > a {
    border: 1px solid #fff;
    background-color: black;
    padding: 5px 10px;
    outline: none;
    cursor: pointer;
  }
  .pagination > .active > a,
  .pagination > .active > span,
  .pagination > .active > a:hover,
  .pagination > .active > span:hover,
  .pagination > .active > a:focus,
  .pagination > .active > span:focus {
    /* background-color: #8b2020; */
    /* border-color: #8b2020; */
    outline: none;
  }
  .pagination > li > a,
  .pagination > li > span {
    color: #fff;
  }
  .pagination > li:first-child > a,
  .pagination > li:first-child > span,
  .pagination > li:last-child > a,
  .pagination > li:last-child > span {
    border-radius: unset;
  }
`;
