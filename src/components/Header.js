import styled from 'styled-components';
import { GiFilmProjector } from 'react-icons/gi';
import SearchInput from './SearchInput';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo />
        <Title>Film Finder</Title>
        <Logo $reverse />
      </HeaderWrapper>
      <SearchInput />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  height: 15rem;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 2rem 0rem;
  position: sticky;
  top: 0;
`;

const HeaderWrapper = styled.div`
  height: 40%;
  /* background-color: blue; */
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const Title = styled.h1`
  color: #b91313;
  font-size: 3rem;
  font-style: italic;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
  /* 
  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: #fff; */
`;

const Logo = styled(GiFilmProjector)`
  font-size: 3rem;
  transform: ${({ $reverse }) => $reverse && 'scaleX(-1)'};
  color: #fff;
`;
