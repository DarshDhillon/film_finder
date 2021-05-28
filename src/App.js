import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './utils/GlobalStyle';
import HeroBackground from './components/HeroBackground';
import Header from './components/Header';
import PopularFilmList from './components/PopularFilmList';

function App() {
  return (
    <>
      <GlobalStyle />
      <HeroBackground>
        <Header />
        <Router>
          <Switch>
            <Route
              exact
              path={['/', '/home', '/popular']}
              component={PopularFilmList}
            />
          </Switch>
        </Router>
      </HeroBackground>
    </>
  );
}

export default App;
