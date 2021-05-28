import styled from 'styled-components';
import { useRef, useEffect } from 'react';

const SearchInput = () => {
  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <SearchForm>
      <SearchBox
        spellCheck='false'
        ref={searchRef}
        type='text'
        autoComplete='off'
        placeholder='search here for a film..'
      />
    </SearchForm>
  );
};

export default SearchInput;

const SearchForm = styled.form`
  /* background-color: orange; */
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SearchBox = styled.input`
  padding: 0.5rem;
  width: 25%;
  text-align: center;
  font-size: 1.5rem;
  background-color: #fff;
  outline: none;
  border: none;
  color: #000;
  cursor: pointer;
  border-radius: 0.5rem;
  /* font-weight: bold; */

  ::placeholder {
    font-weight: normal;
    color: grey;
  }

  @media screen and (max-width: 1200px) {
    width: 40%;
  }

  @media screen and (max-width: 768px) {
    width: 70%;
  }
`;
