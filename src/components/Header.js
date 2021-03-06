import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GiFilmProjector } from 'react-icons/gi';
import SearchInput from './SearchInput';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <ProjectorIcon />
        <HomeLink to='/'>
          <Title>Film Finder</Title>
        </HomeLink>
        <ProjectorIcon $reverse />
      </HeaderWrapper>
      <SearchInput />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0)
  );
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 2rem 0rem;
  top: 0;
`;

const HeaderWrapper = styled.div`
  height: 40%;
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  text-align: center;
  border-radius: 0.5rem;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const HomeLink = styled(Link)`
  text-decoration: none;
`;

const Title = styled.h1`
  color: #b91313;
  font-size: 4rem;
  font-style: italic;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ProjectorIcon = styled(GiFilmProjector)`
  font-size: 3rem;
  transform: ${({ $reverse }) => $reverse && 'scaleX(-1)'};
  color: #fff;
`;
