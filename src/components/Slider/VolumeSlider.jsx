import { click } from '@testing-library/user-event/dist/cjs/convenience/click.js';
import './VolumeSlider.css';

const minOpacity = 0.15;

const VolumeSlider = ({
  instruments,
  lineName,
  maxVolumeScaledUp,
  sliderValue,
  setLineSliderValues,
  linesToggled,
}) => {
  const changeOpacity = (elementId, opacity) => {
    console.log('elementId =', elementId);
    const tracks = document.getElementById(`${elementId}Tracks`);
    const stations = document.getElementById(`${elementId}Stations`);
    const stationsFore = document.getElementById(`${elementId}StationsFore`);
    tracks.style.opacity = opacity;
    stations.style.opacity = opacity;
    stationsFore.style.opacity = opacity;
    console.log('intended opacity =', opacity);
  };

  const handleSliderChange = (event) => {
    console.log('event.target.value =', event.target.value);
    console.log('maxVolumeScaledUp =', maxVolumeScaledUp);
    console.log('instrument =', instruments);
    let negativeValue = event.target.value - 100;
    instruments[lineName].volume.value = negativeValue;
    setLineSliderValues((prevState) => {
      return {
        ...prevState,
        [lineName]: event.target.value, // square brackets are used to evaluate the variable lineName
      };
    });

    let newOpacity = event.target.value / 100 + minOpacity;
    if (newOpacity > 1) {
      newOpacity = 1;
    }
    changeOpacity(lineName, newOpacity);
  };

  const handleButtonClick = () => {
    if (sliderValue > 0) {
      instruments[lineName].volume.value = -100;
      setLineSliderValues((prevState) => {
        return {
          ...prevState,
          [lineName]: 0, // set the slider value for this line to 0
        };
      });
      changeOpacity(lineName, 0.15);
    } else {
      instruments[lineName].volume.value = -6;
      setLineSliderValues((prevState) => {
        return {
          ...prevState,
          [lineName]: maxVolumeScaledUp,
        };
      });
      changeOpacity(lineName, 1);
    }
  };

  return (
    <div className={`slider-container ${linesToggled[lineName] ? 'slider-open' : ''}`}>
      <img
        className='mute-icon'
        src={sliderValue === 0 ? '/images/mute.png' : '/images/unmute.png'}
        alt='mute'
        onClick={handleButtonClick}
      />
      <input
        type='range'
        min='0'
        max={maxVolumeScaledUp}
        value={sliderValue}
        className={`volume-slider ${lineName}`}
        // className={`volume-slider`}
        onChange={handleSliderChange}></input>
    </div>
  );
};

export default VolumeSlider;
