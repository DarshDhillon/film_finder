import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './utils/GlobalStyle';
import HeroBackground from './components/HeroBackground';
import Header from './components/Header';
import MainFilmList from './components/MainFilmList';

function App() {
  return (
    <>
      <GlobalStyle />
      <HeroBackground>
        <Header />
        <MainFilmList />
      </HeroBackground>
    </>
  );
}

export default App;
