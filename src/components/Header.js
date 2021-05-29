import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GiFilmProjector } from 'react-icons/gi';
import SearchInput from './SearchInput';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo />
        <HomeLink to='/'>
          <Title>Film Finder</Title>
        </HomeLink>
        <Logo $reverse />
      </HeaderWrapper>
      <SearchInput />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 2rem 0rem;
  /* position: sticky; */
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
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const HomeLink = styled(Link)`
  text-decoration: none;
`;

const Title = styled.h1`
  color: #b91313;
  font-size: 3rem;
  font-style: italic;
  font-weight: bold;
  /* text-decoration: none; */

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }

  /* -webkit-text-stroke-width: 0.1px;
  -webkit-text-stroke-color: lightgrey; */
`;

const Logo = styled(GiFilmProjector)`
  font-size: 3rem;
  transform: ${({ $reverse }) => $reverse && 'scaleX(-1)'};
  color: #fff;
`;
