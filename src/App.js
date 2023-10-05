import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import ScrollToTop from "./Components/Utils/ScrollToTop";
import Xs from "./Components/Xs/Xs";
import S from "./Components/S/Small";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/s" element={<S />} />
        <Route exact path="/xs" element={<Xs />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
