import React from "react";
import GlobalStyles from './GlobalStyles';
import Header from './components/Header'

// import { Route, Routes } from "react-router-dom";
// import Home from './pages/Home'
// import Login from './pages/Login'
// import Register from './pages/Register'
import LandingPage from './components/LandingPage'

function App() {
  return (
    <div className="App">
    <GlobalStyles/>
    <Header/>
<LandingPage/>
      {/* <Routes>
          <Route  path="/" component={Home} />
          <Route  path="/Login" component={Login} />
          <Route  path="/Register" component={Register} />
        </Routes> */}
    </div>
  );
}

export default App;
