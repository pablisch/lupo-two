// import { useState, useEffect, useRef } from 'react';
import './App.css';
import './FlareEffect/flareEffects.css';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LandingPage from './pages/LandingPage';
import MapPage from './pages/MapPage';
import audioStartup from './music/audioStartup';
import * as Tone from 'tone'; // used to get Tone.now() for timing
import { allStationsObject } from './data/stations';
import tflApiUrl from './utils/tflApiUrl';
import processTubeData from './utils/processTubeData';
import triggerAudioVisuals from './utils/triggerAudioVisuals';
import TIMEOUTS from './utils/timeouts';
import { useUserSettings } from './context/userSettingsContext';

const minVelocity = 0.8;
const dataBlockDuration = 10; // seconds between fetch from TFL
// const lines = "bakerloo,central,circle,district,hammersmith-city,jubilee,metropolitan,northern,piccadilly,victoria,waterloo-city";
const arrivals = []; // array to hold arrival elements, intialised w global scope
let mainLooper;

const App = () => {
  const [audioContext, setAudioContext] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [visualiseEventsOnly, setVisualiseEventsOnly] = useState(true);
  const [dataVisualiserKey, setDataVisualiserKey] = useState(0);
  const [visualData, setVisualData] = useState([]);
  const [flareEffectsOn, setFlareEffectsOn] = useState(true);
  const [specialService, setSpecialService] = useState(false);

  const [instruments, setInstruments] = useState([]);
  const [currentInstrument, setCurrentInstrument] = useState('orchestra');
  const [samplers, setSamplers] = useState(null);

  const { isMuted } = useUserSettings();

  const loadInstrumentSet = async (instrumentSet) => {
    console.log('loadInstrumentSet function called in App.jsx');
    // console.log(`loading instrument set ${instrumentSet}...`);
    const { awaitedInstruments, samplersObject } = await audioStartup(
      currentInstrument,
      samplers
    );
    console.log('awaitedInstruments', awaitedInstruments);
    setInstruments(awaitedInstruments);
    if (!samplers) setSamplers(samplersObject);
  };

  const soundOn = async () => {
    console.log('soundOn function called in App.jsx');
    if (!isPlaying) {
      // console.log('samplers not yet set');
    }
    setIsPlaying(true); // controls the visibility of the service-status button
    // const { awaitedInstruments, samplersObject } = await audioStartup(
    //   currentInstrument,
    //   samplers
    // );
    console.log(
      'in soundOn, samplersObject:',
      samplersObject,
      'instruments:',
      awaitedInstruments
    );
    setInstruments(awaitedInstruments);
    if (!samplers) setSamplers(samplersObject);
  };

  const handleInitialSoundSetup = () => {
    console.log('initialSoundSetup');
    setAudioContext(true);
    setIsPlaying(true);
  };

  const start = () => {
    setTimeout(() => {
      soundOn();
    }, 0);
  };

  const stop = () => {
    console.log('STOP');
    TIMEOUTS.clearAllTimeouts();
    clearTimeout(mainLooper);
    setIsPlaying(false);
  };

  const clearCurrentArrivals = () => {
    TIMEOUTS.clearAllTimeouts();
    clearTimeout(mainLooper);
  };

  const restart = async () => {
    console.log('RESTART');
    stop();
    soundOn();
  };

  const fetchData = () => {
    axios
      .get(tflApiUrl)
      .then((response) => {
        const filteredData = response.data
          .filter((item) => item.timeToStation < dataBlockDuration)
          .map((item) => ({
            id: item.id,
            stationName: item.stationName,
            lineName: item.lineName,
            timeToStation: item.timeToStation,
          }));
        console.log('filteredData =', filteredData);
        const sortedData = filteredData.sort(
          (a, b) => a.timeToStation - b.timeToStation
        );
        if (sortedData.length > 260) {
          localStorage.setItem('sortedData', JSON.stringify(sortedData));
          console.log(
            `sortedData.length = ${sortedData.length}, saved to localStorage`
          );
        } else {
          console.log(
            `sortedData.length = ${sortedData.length}, NOT saved to localStorage`
          );
        }
        if (sortedData.length > 4) {
          const processedData = processTubeData(sortedData, dataBlockDuration);
          // console.log('processedData =', processedData);
          setVisualData(processedData);
          triggerAudioVisuals(
            processedData,
            instruments,
            flareEffectsOn,
            arrivals
          );
        } else {
          console.log(
            'Not enough data to process. Implementing a special service.'
          );
          fetchSpecialServiceData();
        }
      })
      .catch((error) => {
        console.error("Error fetching TFL's dodgy tube data:", error);
      });
  };

  const fetchSpecialServiceData = () => {
    axios
      .get(`/data/sampleData${dataBlockDuration}.json`)
      .then((response) => {
        const filteredData = response.data;
        const sortedData = filteredData.sort(
          (a, b) => a.timeToStation - b.timeToStation
        );
        const processedData = processTubeData(sortedData, dataBlockDuration);
        // console.log('sortedData =', sortedData);
        console.log('RUNNING SPECIAL SERVICE processedData =', processedData);
        setVisualData(processedData);
        // console.log('in fetchSpecialServiceData instruments', instruments);
        // console.log('in fetchSpecialServiceData samplers', samplers);

        triggerAudioVisuals(
          processedData,
          instruments,
          flareEffectsOn,
          arrivals
        );
      })
      .catch((error) => {
        console.error('Error fetching Special Service tube data:', error);
      });
  };

  const getArrivalData = () => {
    if (!isPlaying) {
      return;
    }

    if (instruments) {
      if (specialService) {
        fetchSpecialServiceData();
        mainLooper = setInterval(
          fetchSpecialServiceData,
          dataBlockDuration * 1000
        );
      } else {
        fetchData(); // initial fetch as setInterval only exectues after first interval
        mainLooper = setInterval(fetchData, dataBlockDuration * 1000);
      }
    }
  };

  useEffect(() => {
    // To trigger the first fetch after instruments
    getArrivalData();
  }, [instruments]);

  const toggleVisualiseEventsOnly = () => {
    setVisualiseEventsOnly(!visualiseEventsOnly);
    setDataVisualiserKey((prevKey) => prevKey + 1);
    console.log(visualiseEventsOnly);
    setTimeout(() => {
      setVisualiseEventsOnly(visualiseEventsOnly);
      setDataVisualiserKey((prevKey) => prevKey + 1);
      console.log(visualiseEventsOnly);
    }, 3000);
  };

  // handleFlareToggle to toggle the value of flareEffectsOn
  const handleFlareToggle = () => {
    setFlareEffectsOn((current) => !current);
    // clearCurrentArrivals();
    // getArrivalData();
  };

  useEffect(() => {
    clearCurrentArrivals();
    getArrivalData();

    return () => {
      clearCurrentArrivals();
    };
  }, [flareEffectsOn]);

  // handleSpecialServiceToggle to toggle the value of specialService
  const handleSpecialServiceToggle = () => {
    console.log('specialService: ' + specialService);
    setSpecialService((current) => !current);
    clearCurrentArrivals();
    getArrivalData();
  };

  useEffect(() => {
    if (!isPlaying) {
      return;
    }
    (async () => {
      await restart();
    })();

    return () => {};
    // eslint-disable-next-line
  }, [currentInstrument]);

  const changeCurrentInstrument = (change) => {
    console.log('Change Current Instrument to :' + change);
    setCurrentInstrument(change);
  };

  useEffect(() => {
    if (audioContext) loadInstrumentSet(currentInstrument);
  }, [audioContext]);

  // TEMPORARY MUTE CHECK FOR IF DEV MUTING BY DEFAULT - CAN BE REMOVED
  useEffect(() => {
    if (isMuted) Tone.Destination.mute = true;
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <LandingPage handleInitialSoundSetup={handleInitialSoundSetup} />
            }
          />
          <Route
            path='/sounds-of-the-underground'
            element={
              <MapPage
                isPlaying={isPlaying}
                flareEffectsOn={flareEffectsOn}
                handleFlareToggle={handleFlareToggle}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
