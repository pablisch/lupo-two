import React, { useState } from 'react';
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
  handleSpecialServiceToggle,
  isToggled,
  handleToggle,
}) => {
  const {
    isMuted,
    handleMuteToggle,
    flareEffectsAreOn,
    setFlareEffectsAreOn,
    specialServiceIsActive,
    setSpecialServiceIsActive,
  } = useUserSettings();
  const [linesToggled, setlinesToggled] = useState(
    // Populates an object with each line name and the property false
    lineNames.reduce((object, lineName) => {
      object[lineName] = false;
      return object;
    }, {}) // last arg = inital value of empty object
  );

  const [lineSliderValues, setLineSliderValues] = useState(
    lineNames.reduce((object, lineName) => {
      const maxVolumeScaledUp = instruments
        ? instruments[lineName].maxVolume + 100
        : 94;
      object[lineName] = maxVolumeScaledUp;
      return object;
    }, {}) // last arg = inital value of empty object
  );

  // Function to toggle the open/closed boolean state of the line controls
  const handleLineControlToggle = (lineName) => {
    // First arg to useState setter function is the previous state of the variable...
    // ...In our case this is the object containing toggled state of all lines
    setlinesToggled((prevState) => ({
      ...prevState,
      [lineName]: !prevState[lineName],
    }));
  };

  return (
    <aside className='sidebar sidebar-left'>
      {/* <h2>Line Status</h2> */}
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

      {lineNames.map((lineName) => {
        return (
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
            {linesToggled[lineName] && (
              <>
                <div className={`mute ${linesToggled[lineName] ? 'open' : ''}`}>
                  <Slider
                    lineName={lineName}
                    instruments={instruments}
                    key={lineName}
                    maxVolumeScaledUp={
                      instruments ? instruments[lineName].maxVolume + 100 : 94
                    }
                    sliderValue={lineSliderValues[lineName]}
                    setLineSliderValues={setLineSliderValues}
                  />
                </div>
              </>
            )}
          </div>
        );
      })}
    </aside>
  );
};
export default SideBarLeft;
