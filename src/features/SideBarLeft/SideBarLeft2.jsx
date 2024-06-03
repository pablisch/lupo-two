import React, { useState, useEffect } from 'react';
import './SideBarLeft.css';
import Slider from '../../components/Slider/Slider';
import lineNames from '../../data/lineNames';
import { useUserSettings } from '../../context/userSettingsContext';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch';
import InstrumentSelector from '../../components/InstrumentSelector/InstrumentSelector';

const instrumentSelection = [
  { label: 'Tube Drums', value: 'tubeDrums' },
  { label: 'Strings', value: 'strings' },
  { label: 'Marimba', value: 'marimba' },
  { label: 'Orchestra', value: 'orchestra' },
];

const SideBarLeft = ({
  currentInstrument,
  isPlaying,
  instruments,
  changeCurrentInstrument,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const {
    isMuted,
    handleMuteToggle,
    flareEffectsAreOn,
    setFlareEffectsAreOn,
    specialServiceIsActive,
    setSpecialServiceIsActive,
  } = useUserSettings();

  const [linesToggled, setlinesToggled] = useState(
    lineNames.reduce((object, lineName) => {
      object[lineName] = false;
      return object;
    }, {})
  );

  const [lineSliderValues, setLineSliderValues] = useState({});

  useEffect(() => {
    if (instruments) {
      const initialSliderValues = lineNames.reduce((object, lineName) => {
        const maxVolumeScaledUp = instruments[lineName]?.maxVolume + 100 || 94;
        object[lineName] = maxVolumeScaledUp;
        return object;
      }, {});
      setLineSliderValues(initialSliderValues);
      setIsLoading(false);
    }
  }, [instruments]);

  const handleLineControlToggle = (lineName) => {
    setlinesToggled((prevState) => ({
      ...prevState,
      [lineName]: !prevState[lineName],
    }));
  };

  if (isLoading) {
    return <aside className='sidebar sidebar-left'></aside>;
  }

  return (
    <aside className='sidebar sidebar-left'>
      <button
        className={`service-status ${
          specialServiceIsActive ? 'special-service' : 'good-service'
        } ${!isPlaying ? 'suspended-service' : ''}`}
        disabled={isPlaying}>
        {!isPlaying
          ? 'Suspended'
          : !specialServiceIsActive
          ? 'Good Service'
          : 'Special Service'}
      </button>
      <div className='user-settings'>
        <ToggleSwitch
          isOn={specialServiceIsActive}
          handleToggle={() => setSpecialServiceIsActive((status) => !status)}
          labelId={'special-service-toggle'}
          label={'Special Service'}
        />
        <ToggleSwitch
          isOn={flareEffectsAreOn}
          handleToggle={() => setFlareEffectsAreOn((flares) => !flares)}
          labelId={'flare-effects'}
          label={'Flare Effects'}
        />
        <ToggleSwitch
          isOn={!isMuted}
          handleToggle={handleMuteToggle}
          labelId={'music-mute'}
          label={'Music'}
        />
      </div>

      <div className="instrument-selectors">
        {instrumentSelection.map((instrument) => (
          <InstrumentSelector
            key={instrument.value}
            instrumentLabel={instrument.label}
            instrumentSet={instrument.value}
            currentInstrument={currentInstrument}
            changeCurrentInstrument={changeCurrentInstrument}
          />
        ))}
      </div>

      <button onClick={() => console.log('In LEFTY. Instruments value:', instruments) } >intruments</button>
      <button onClick={() => console.log('In LEFTY. Bakerloo instruments value:', typeof(instruments['Bakerloo'].maxVolume)) } >Bakerloo maxVolume</button>
      <button onClick={() => console.log('In LEFTY. linesToggled:', linesToggled) } >linesToggled</button>
      <button onClick={() => console.log('In LEFTY. lineSliderValues:', lineSliderValues) } >lineSliderValues</button>

      <div className="line-volume-controls">
        {lineNames.map((lineName) => (
          <div key={lineName}>
            <button
              className={`btn-line btn-${lineName.toLowerCase()}`}
              type='button'
              onClick={() => handleLineControlToggle(lineName)}>
              {lineName === 'HammersmithCity' ? 'H&C' : ''}
              {lineName === 'WaterlooCity' ? 'Waterloo & City' : ''}
              {lineName !== 'HammersmithCity' && lineName !== 'WaterlooCity'
                ? lineName
                : ''}
            </button>
            {linesToggled[lineName] && 
              <div className={`slider-container mute ${linesToggled[lineName] ? 'open' : ''}`}>
                <Slider 
                  lineName={lineName} 
                  instruments={instruments} 
                  key={lineName} 
                  maxVolumeScaledUp={instruments[lineName]?.maxVolume + 100 || 94} 
                  sliderValue={lineSliderValues[lineName]}
                  setLineSliderValues={setLineSliderValues}
                />
              </div>
            }
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SideBarLeft;
