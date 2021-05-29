import styled from 'styled-components';
import { useEffect, useState } from 'react';
import useFetchSearchedFilm from '../hooks/useFetchSearchedFilm';
import { useHistory } from 'react-router-dom';

const SearchInput = () => {
  const history = useHistory();
  const [fetchSearchedFilm] = useFetchSearchedFilm();
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    if (!searchInput) return;
    fetchSearchedFilm(searchInput);
    history.push('/search');
  }, [searchInput]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(() => e.target.value);
  };

  console.log(searchInput);

  return (
    <SearchForm>
      <SearchBox
        value={searchInput}
        autoFocus
        onChange={handleChange}
        spellCheck='false'
        type='text'
        autoComplete='off'
        placeholder='search for a film..'
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
    width: 50%;
    font-size: 1rem;
  }
`;
