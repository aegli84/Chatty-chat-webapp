import GlobalStyles from './GlobalStyles';
import Header from './components/Header'
import LandingPage from './components/LandingPage';
// import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <GlobalStyles/>
    <Header/>
    <LandingPage/>
      {/* <Switch>
          <Route exact path="/" component={Home}>
        </Switch> */}
    </div>
  );
}

export default App;
