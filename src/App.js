import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import ScrollToTop from "./Components/Utils/ScrollToTop";
import SizesDetail from "./Components/SizesDetail/SizesDetail";

function App() {
  return (
    <div className="app">
    <BrowserRouter>
      <Routes>
        <Route exact path="/sizes/:id" element={<SizesDetail />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
    </div>
  );
}

export default App;
