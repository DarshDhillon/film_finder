import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import HeroBG from '../assets/images/main_bg2.jpg';
import PropTypes from 'prop-types';

const HeroBackground = ({ children }) => {
  const [backgroundImage, setBackgroundImage] = useState(HeroBG);

  const selectedFilmImages = useSelector(
    (state) => state.filmsReducer.selectedFilmData.selectedFilmImages
  );

  const stateType = useSelector((state) => state.filmsReducer.type);

  useEffect(() => {
    setBackgroundImage(() => {
      if (stateType === 'selected' && selectedFilmImages.length > 0) {
        return `https://image.tmdb.org/t/p/original${selectedFilmImages[0].file_path}`;
      } else {
        return HeroBG;
      }
    });
  }, [stateType, selectedFilmImages]);

  return <Background $image={backgroundImage}>{children}</Background>;
};

HeroBackground.propTypes = {
  children: PropTypes.node,
};

export default HeroBackground;

const Background = styled.div`
  min-height: 100vh;
  /* width: 100%; */
  background-image: ${({ $image }) => $image && `url(${$image})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-color: #000;
`;
