import React, { useState, useEffect } from 'react';
import './SideBarLeft.css';
import lineNames from '../../data/lineNames';
import { useUserSettings } from '../../context/userSettingsContext';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch';
import InstrumentSelector from '../../components/InstrumentSelector/InstrumentSelector';
import { useBurgerMenu } from '../../context/burgerMenuContext';
import VolumeSlider from '../../components/Slider/VolumeSlider';

const sampleLine = 'Bakerloo';

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
  const [hoveredLineBtn, setHoveredLineBtn] = useState('');

  const {
    isMuted,
    handleMuteToggle,
    flareEffectsAreOn,
    setFlareEffectsAreOn,
    specialServiceIsActive,
    setSpecialServiceIsActive,
  } = useUserSettings();
  const { isBurgerOpen } = useBurgerMenu();

  const [linesToggled, setlinesToggled] = useState(
    lineNames.reduce((object, lineName) => {
      object[lineName] = false;
      return object;
    }, {})
  );

  const [lineSliderValues, setLineSliderValues] = useState({});

  const handleLineBtnHover = (lineName) => {
    setHoveredLineBtn(lineName);
  };

  const handleLineBtnLeave = () => {
    setHoveredLineBtn('');
  };

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
    <aside
      className={`sidebar sidebar-left ${isBurgerOpen ? 'left-bar-open' : ''}`}>
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
          className='control-container special-service-toggle'
          isOn={!specialServiceIsActive}
          handleToggle={() => setSpecialServiceIsActive((status) => !status)}
          labelId={'special-service-toggle'}
          label={'Live Arrivals'}
        />
        {/* <div className="tooltip-special-service">Hello hello</div> */}
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

      <div className='instrument-selectors'>
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

      <div className='line-volume-controls'>
        <div key={sampleLine}></div>

        {lineNames.map((lineName) => (
          <div key={lineName}>
            <button
              className={`btn-line btn-${lineName.toLowerCase()}`}
              type='button'
              onClick={() => handleLineControlToggle(lineName)}
              onMouseEnter={() => handleLineBtnHover(lineName)}
              onMouseLeave={handleLineBtnLeave}>
              {lineName === hoveredLineBtn ? (
                "Good Service"
              ) : (
                <>
                  {lineName === 'HammersmithCity' ? 'H&C' : ''}
                  {lineName === 'WaterlooCity' ? 'Waterloo & City' : ''}
                  {lineName !== 'HammersmithCity' && lineName !== 'WaterlooCity'
                    ? lineName
                    : ''}
                </>
              )}
            </button>
            <VolumeSlider
              lineName={lineName}
              instruments={instruments}
              key={lineName}
              maxVolumeScaledUp={instruments[lineName]?.maxVolume + 100 || 94}
              sliderValue={lineSliderValues[lineName]}
              setLineSliderValues={setLineSliderValues}
              linesToggled={linesToggled}
            />
          </div>
        ))}
      </div>

      <div className='scroll-spacer'></div>
    </aside>
  );
};

export default SideBarLeft;
