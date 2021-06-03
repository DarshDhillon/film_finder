import styled from 'styled-components';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { getSearchedFilmsAsync } from '../state/filmsSlice';
import { useDispatch } from 'react-redux';

const SearchInput = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearchedFilmsAsync(searchInput));
    history.push(`/search/${searchInput}`);
    setSearchInput('');
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchBox
        value={searchInput}
        autoFocus
        onChange={(e) => setSearchInput(e.target.value)}
        spellCheck='false'
        type='text'
        autoComplete='off'
        placeholder='search for a film..'
      />
      <SearchButton>
        <SearchIcon $searchInput={searchInput} />
      </SearchButton>
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
  color: #b91313;
  border-radius: 0.5rem 0 0 0.5rem;
  font-weight: bold;

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

const SearchButton = styled.button`
  background: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 0 0.5rem 0.5rem 0;
`;

const SearchIcon = styled(AiOutlineSearch)`
  font-size: 1.5rem;
  margin-right: 1rem;
  transition: all 0.3s ease-in-out;
  opacity: ${({ $searchInput }) => ($searchInput ? '1' : '0')};
`;
