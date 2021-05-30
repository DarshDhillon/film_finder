import styled from 'styled-components';
import HeroBG from '../assets/images/main_bg2.jpg';

const HeroBackground = ({ children }) => {
  return <Background>{children}</Background>;
};

export default HeroBackground;

const Background = styled.div`
  min-height: 100vh;
  width: 100%;
  background-image: url(${HeroBG});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  background-attachment: fixed;
  background-size: cover;
`;
