import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import GlobalStyle from './utils/GlobalStyle';
import HeroBackground from './components/HeroBackground';
import Header from './components/Header';
import FilmListSelector from './components/FilmListSelector';
import SelectedFilm from './pages/SelectedFilm';
import NowPlaying from './pages/NowPlaying';
import Popular from './pages/Popular';
import SearchedFilms from './pages/SearchedFilms';
import TopRated from './pages/TopRated';
import Upcoming from './pages/Upcoming';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <HeroBackground>
        <Header />
        <FilmListSelector />
        <Switch>
          <Route exact path='/'>
            <Redirect to='/now_playing' />
          </Route>
          <Route path='/now_playing' component={NowPlaying} />
          <Route path='/popular' component={Popular} />
          <Route path='/top_rated' component={TopRated} />
          <Route path='/upcoming' component={Upcoming} />
          <Route path='/search/:searchTerm' component={SearchedFilms} />
          <Route path='/film/:filmID' component={SelectedFilm} />
        </Switch>
      </HeroBackground>
    </Router>
  );
}

export default App;
