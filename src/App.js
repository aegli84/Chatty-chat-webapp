import React from "react";
import GlobalStyles from './GlobalStyles';
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Navbar/>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="login" element={<Login />} />
          <Route  path="register" element={<Register />} />
          <Route  path="contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
