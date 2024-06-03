import React from 'react';
import './InstrumentSelector.css';

const InstrumentSelector = ({
  instrumentLabel,
  instrumentSet,
  currentInstrument,
  changeCurrentInstrument,
}) => {
  return (
    <div className='instrument-selector-container'>
      <button
        className='instrument-button'
        id={instrumentSet}
        onClick={() => changeCurrentInstrument(instrumentSet)}
        disabled={currentInstrument === instrumentSet}>
        {instrumentLabel}
      </button>
      <div className={`instrument-light ${currentInstrument === instrumentSet ? 'instrument-light-active' : ''}`}></div>
    </div>
  );
};

export default InstrumentSelector;
