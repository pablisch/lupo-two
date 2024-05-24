// import { useState, useEffect, useRef } from 'react';
import './App.css'
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import MapPage from './pages/MapPage';
import audioStartup from './music/audioStartup';
import * as Tone from 'tone'; // used to get Tone.now() for timing
import {allStationsObject} from './data/stations';

const minVelocity = 0.8;

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [tapInVisible, setTapInVisible] = useState(true);
  const [instruments, setInstruments] = useState([]);
  const [currentInstrument, setCurrentInstrument] = useState('orchestra');

  const initialiseInstruments = async () => {
    console.log('SOUND ON');
    setTapInVisible(false);
    setIsPlaying(true); // controls the visibility of the soundon button
    // fadeAllStations();
    const awaitedInstruments = await audioStartup(currentInstrument);
    console.log(awaitedInstruments)
    setInstruments(awaitedInstruments);
  }

  const playSound = (line, station) => {
    const note = instruments.noteAssignFunctions[line](station);
    const now = Tone.now();
    const randomVelocity = Math.round(((Math.random() * minVelocity) + minVelocity) * 10) / 10;
    instruments[line].triggerAttackRelease(note, '4n', now, randomVelocity);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sounds-of-the-underground" element={<MapPage />} />
        </Routes>
      </BrowserRouter>
      <button onClick={() => initialiseInstruments()} >{isPlaying ? "Sound is ON" : "Turn Sound ON"}</button>
      <p></p>
      <div className="temp-delete-buttons"></div>
      <p>Bakerloo</p>
      {allStationsObject.bakerloo
        .map((station) => (
          <button key={station} onClick={() => playSound('Bakerloo', station)}>{station}</button>
        ))
      }
      <p>Central</p>
      {allStationsObject.central
        .map((station) => (
          <button key={station} onClick={() => playSound('Central', station)}>{station}</button>
        ))
      }
      <button onClick={() => playSound('Northern', 'Morden')} >Baker Street</button>

      
    </div>
  )
}

export default App
