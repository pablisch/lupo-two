import React from 'react';
import './InstrumentSelector.css';
import '../Controls.css';

const InstrumentSelector = ({
  instrumentLabel,
  instrumentSet,
  currentInstrument,
  changeCurrentInstrument,
}) => {
  return (
    <button
      className='instrument-selector-container control-container'
      disabled={currentInstrument === instrumentSet}
      onClick={() => changeCurrentInstrument(instrumentSet)}
      id={instrumentSet}>
      {instrumentLabel}
      <div
        className={`instrument-light ${
          currentInstrument === instrumentSet ? 'instrument-light-active' : ''
        }`}></div>
    </button>
  );
};

export default InstrumentSelector;
