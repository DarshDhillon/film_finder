import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './utils/GlobalStyle';
import HeroBackground from './components/HeroBackground';
import Header from './components/Header';
import FilmList from './components/FilmList';
import FilmListSelector from './components/FilmListSelector';
import SelectedFilm from './components/SelectedFilm';
import SearchedFilms from './components/SearchedFilms';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <HeroBackground>
          <Header />
          <FilmListSelector />
          <Switch>
            <Route exact path={['/', '/popular']} component={FilmList} />
            <Route path='/film/:filmID' component={SelectedFilm} />
            <Route path='/search' component={SearchedFilms} />
          </Switch>
        </HeroBackground>
      </Router>
    </>
  );
}

export default App;
