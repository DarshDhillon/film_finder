import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import HeroBG from '../assets/images/main_bg2.jpg';

const HeroBackground = ({ children }) => {
  const [backgroundImage, setBackgroundImage] = useState(HeroBG);

  const selectedFilmBackgroundImage = useSelector((state) =>
    state.filmsReducer.selectedFilmData.selectedFilmImages.backdrops
      ? state.filmsReducer.selectedFilmData.selectedFilmImages.backdrops[0]
          .file_path
      : null
  );

  const stateType = useSelector((state) => state.filmsReducer.type);

  console.log('rendered');

  useEffect(() => {
    stateType === 'selected'
      ? selectedFilmBackgroundImage &&
        setBackgroundImage(
          `https://image.tmdb.org/t/p/original${selectedFilmBackgroundImage}`
        )
      : setBackgroundImage(HeroBG);
  }, [stateType, selectedFilmBackgroundImage]);

  return <Background $image={backgroundImage}>{children}</Background>;
};

export default HeroBackground;

const Background = styled.div`
  min-height: 100vh;
  width: 100%;
  background-image: ${({ $image }) => $image && `url(${$image})`};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  background-attachment: fixed;
  background-size: cover;
`;

// const [backgroundImage, setBackgroundImage] = useState(HeroBG);

// const selectedFilmBackgroundImage = useSelector((state) =>
//   state.filmsReducer.selectedFilmData.selectedFilmImages.backdrops
//     ? state.filmsReducer.selectedFilmData.selectedFilmImages.backdrops[0]
//         .file_path
//     : null
// );

// console.log('rendered');

// useEffect(() => {
//   selectedFilmBackgroundImage &&
//     setBackgroundImage(
//       `https://image.tmdb.org/t/p/original${selectedFilmBackgroundImage}`
//     );
// }, [selectedFilmBackgroundImage]);
