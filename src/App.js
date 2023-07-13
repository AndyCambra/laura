import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import ScrollToTop from './Components/Utils/ScrollToTop';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
    <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
