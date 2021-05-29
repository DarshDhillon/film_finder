import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './utils/GlobalStyle';
import HeroBackground from './components/HeroBackground';
import Header from './components/Header';
import FilmList from './components/FilmList';
import FilmListSelector from './components/FilmListSelector';
import SelectedFilm from './components/SelectedFilm';
import Test from './components/Test';

function App() {
  return (
    <>
      <GlobalStyle />
      <HeroBackground>
        <Router>
          <Header />
          <FilmListSelector />
          <Switch>
            <Route
              exact
              path={['/', '/home', '/popular']}
              component={FilmList}
            />
            <Route path='/film/:filmID' component={SelectedFilm} />
            <Route path='/search' component={Test} />
          </Switch>
        </Router>
      </HeroBackground>
    </>
  );
}

export default App;
