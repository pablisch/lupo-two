// import { useState, useEffect, useRef } from 'react';
import './App.css'
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import MapPage from './pages/MapPage';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sounds-of-the-underground" element={<MapPage />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
