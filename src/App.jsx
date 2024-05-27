// import { useState, useEffect, useRef } from 'react';
import './App.css'
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import LandingPage from './pages/LandingPage';
import MapPage from './pages/MapPage';
import audioStartup from './music/audioStartup';
import * as Tone from 'tone'; // used to get Tone.now() for timing
import {allStationsObject} from './data/stations';

const minVelocity = 0.8;

function App() {
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [visualiseEventsOnly, setVisualiseEventsOnly] = useState(true);
  const [dataVisualiserKey, setDataVisualiserKey] = useState(0);
  const [visualData, setVisualData] = useState([]);
  const [arrivalFlareEffectsToggle, setarrivalFlareEffectsToggle] = useState(true);
  const [specialServiceToggle, setSpecialServiceToggle] = useState(true);
  
  const [instruments, setInstruments] = useState([]);
  const [currentInstrument, setCurrentInstrument] = useState('orchestra');
  const [samplers, setSamplers] = useState(null);

  // Setup early in LUPO 2 - may not be needed anymore
  const loadInstrumentSet = async (instrumentSet) => {
    console.log(`loading instrument set ${instrumentSet}...`)
    const awaitedInstruments = await audioStartup(instrumentSet);
    console.log('awaitedInstruments', awaitedInstruments)
    setInstruments(awaitedInstruments);
  }

  const soundOn = async () => {
    console.log('SOUND ON');
    if (!isPlaying) { 
      console.log('samplers not yet set')
    }
    fadeAllStations();
    setIsPlaying(true); // controls the visibility of the soundon button
    const { awaitedInstruments, samplersObject } = await audioStartup(currentInstrument, samplers);
    console.log("in soundOn, samplersObject:", samplersObject, "instruments:", awaitedInstruments)
    setInstruments(awaitedInstruments);
    if (!samplers) setSamplers(samplersObject);
  }

  const start = () => {
    setTimeout(() => {
      soundOn();
    }, 0)
  }

  const stop = () => {
    console.log("STOP");
    TIMEOUTS.clearAllTimeouts();
    clearTimeout(mainLooper);
    setIsPlaying(false);
  }

  const restart = async () => {
    console.log("RESTART");
    stop();
    soundOn();
  }

  const fetchData = () => {
    axios.get(`https://api.tfl.gov.uk/Line/${lines}/Arrivals?`)
      .then(response => {
        const filteredData = response.data
          .filter(item => item.timeToStation < dataBlockDuration)
          .map(item => ({
            id: item.id,
            stationName: item.stationName,
            lineName: item.lineName,
            timeToStation: item.timeToStation
          }));
        const sortedData = filteredData.sort((a, b) => a.timeToStation - b.timeToStation);
        if (sortedData.length > 260) {
          localStorage.setItem('sortedData', JSON.stringify(sortedData));
          console.log(`sortedData.length = ${sortedData.length}, saved to localStorage`)
        } else {
          console.log(`sortedData.length = ${sortedData.length}, NOT saved to localStorage`)
        }
        const processedData = processTubeData(sortedData, dataBlockDuration);
        // console.log('processedData =', processedData);
        setVisualData(processedData);
        // console.log("fetchdata instruments", instruments)
        triggerAudioVisuals(processedData, instruments, arrivalFlareEffectsToggle, arrivals)
      })
      .catch(error => {
        console.error("Error fetching TFL's dodgy tube data:", error);
      });
  };

  const fetchSpecialServiceData = () => {
    axios.get('/sampleData3.json')
      .then(response => {
        const filteredData = response.data;
        const sortedData = filteredData.sort((a, b) => a.timeToStation - b.timeToStation);
        const processedData = processTubeData(sortedData, dataBlockDuration);
        console.log('sortedData =', sortedData)
        console.log('processedData =', processedData)
        console.log('RUNNING SPECIAL SERVICE')
        setVisualData(processedData);
        console.log("fetchdata instruments", instruments)
        triggerAudioVisuals(processedData, instruments, arrivalFlareEffectsToggle, arrivals);
      })
      .catch(error => {
        console.error("Error fetching TFL's dodgy tube data:", error);
      });
  };

    // To trigger the first fetch after instruments 
    useEffect(() => {
    if(!isPlaying) {return;}
    // console.log('used effect')

    if(instruments) { 
      console.log('instruments:', instruments)
      if (specialServiceToggle) {
        fetchSpecialServiceData();
        mainLooper = setInterval(fetchSpecialServiceData, dataBlockDuration * 1000);
      } else {
        fetchData()  // initial fetch as setInterval only exectues after first interval
        mainLooper = setInterval(fetchData, dataBlockDuration * 1000);
      }
    }
  // eslint-disable-next-line
  }, [instruments])

  const toggleVisualiseEventsOnly = () => {
    setVisualiseEventsOnly(!visualiseEventsOnly);
    setDataVisualiserKey((prevKey) => prevKey + 1);
    console.log(visualiseEventsOnly)
    setTimeout(() => {
      setVisualiseEventsOnly(visualiseEventsOnly);
      setDataVisualiserKey((prevKey) => prevKey + 1);
      console.log(visualiseEventsOnly)
    }, 3000);
  };

  // handleArrivalEffectToggle to toggle the value of arrivalFlareEffectsToggle
  const handleArrivalEffectToggle = () => {
    console.log('arrivalFlareEffectsToggle: '+ arrivalFlareEffectsToggle);
    setarrivalFlareEffectsToggle(current => !current);
    restart();
  };
  
  // handleSpecialServiceToggle to toggle the value of specialServiceToggle
  const handleSpecialServiceToggle = () => {
    console.log('specialServiceToggle: '+ specialServiceToggle);
    setSpecialServiceToggle(current => !current);
    restart();
  };

  useEffect(() => {
    if(!isPlaying) {return;}
    (async () => {
      await restart();
    })();

    return () => {};
  // eslint-disable-next-line
  }, [currentInstrument])
  
  const changeCurrentInstrument = (change) => {
    console.log("Change Current Instrument to :" + change);
    setCurrentInstrument(change);
  }

  const handleMuteButtonClick = () => {
    if (muted) {
      Tone.Destination.mute = false;
      console.log('unmuted')
    } else {
      Tone.Destination.mute = true;
      console.log('muted')
    }
    setMuted(() => !muted);
  }

  useEffect(() => {
    if (isSoundOn) loadInstrumentSet(currentInstrument);
  }, [isSoundOn]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage setIsSoundOn={setIsSoundOn} />} />
          <Route path="/sounds-of-the-underground" element={<MapPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
