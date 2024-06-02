import React, { useState } from 'react';
import './SideBarLeft.css';
import Slider from '../../components/Slider/Slider';
import lineNames from '../../data/lineNames';
import { useUserSettings } from '../../context/userSettingsContext';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch';

const SideBarLeft = ({
  currentInstrument,
  isPlaying,
  instruments,
  changeCurrentInstrument,
  handleSpecialServiceToggle,
  isToggled,
  handleToggle,
}) => {
  const { isMuted, handleMuteToggle, flareEffectsAreOn, setFlareEffectsAreOn, specialServiceIsActive, setSpecialServiceIsActive } = useUserSettings();
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
      <h2>Line Status</h2>
      <button className={`service-status ${specialServiceIsActive ? 'special-service' : 'good-service'} ${!isPlaying ? 'suspended-service' : ''}`} disabled={isPlaying}>
        {!isPlaying ? 'Suspended' : !specialServiceIsActive ? 'Good Service' : 'Special Service'}
      </button>
      <ToggleSwitch isOn={isToggled} handleToggle={handleToggle} labelId={'test-slider'} label={'test'} />
      <br />
      <button
        className={`specialServiceIsActiveButton instrumentButton ${
          specialServiceIsActive ? 'redButton' : 'greenButton'
        }`}
        onClick={() => setSpecialServiceIsActive((status) => !status)}>
        {specialServiceIsActive ? 'Normal Service' : 'Special Service'}
      </button>
      <button
        className={`instrumentButton arrival-effects ${
          flareEffectsAreOn ? 'greenButton' : 'redButton'
        }`}
        onClick={() => setFlareEffectsAreOn(flares => !flares)}>
        {flareEffectsAreOn ? 'Turn Flares OFF' : 'Turn Flares ON'}
      </button>

      <button
        className={`instrumentButton ${isMuted ? 'redButton' : 'greenButton'}`}
        id='mute'
        onClick={() => handleMuteToggle()}>
        {' '}
        {isMuted ? 'Unmute' : 'Mute'}{' '}
      </button>

      <button
        className='instrumentButton'
        id='tubeDrums'
        onClick={() => changeCurrentInstrument('tubeDrums')}
        disabled={currentInstrument === 'tubeDrums'}>
        Tube Drums
      </button>
      <br />
      <button
        className='instrumentButton'
        id='strings'
        onClick={() => changeCurrentInstrument('strings')}
        disabled={currentInstrument === 'strings'}>
        Strings
      </button>
      <br />
      <button
        className='instrumentButton'
        id='marimba'
        onClick={() => changeCurrentInstrument('marimba')}
        disabled={currentInstrument === 'marimba'}>
        Marimba
      </button>
      <br />
      <button
        className='instrumentButton'
        id='orchestra'
        onClick={() => changeCurrentInstrument('orchestra')}
        disabled={currentInstrument === 'orchestra'}>
        Orchestra
      </button>
      <br />

      {lineNames.map((lineName) => {
        return (
          <div key={lineName}>
            {' '}
            {/* Each child in a list should have a unique "key" prop */}
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
