import { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const MainFilmList = () => {
  useEffect(() => {
    const fetchPopularFilms = async () => {
      try {
        const { data } = await axios.get(
          'https://api.themoviedb.org/3/movie/popular?api_key=153467a55dee0e0d0f340ed7d42f8453&language=en-US&page=1&region=GB'
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPopularFilms();
  }, []);

  return <MainFilms></MainFilms>;
};

export default MainFilmList;

const MainFilms = styled.div`
  height: 100vh;
  width: 60%;
  background-color: pink;
`;
