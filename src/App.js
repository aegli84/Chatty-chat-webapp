import GlobalStyles from './GlobalStyles';
import Header from './components/Header'
// import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <GlobalStyles/>
    <Header/>
      {/* <Switch>
          <Route exact path="/" component={Home}>
        </Switch> */}
    </div>
  );
}

export default App;
