import React from 'react'

const InstrumentSelector = ({instrumentLabel, instrumentSet, currentInstrument, changeCurrentInstrument}) => {
  return (
    <div>
      <button
        className='instrumentButton'
        id={instrumentSet}
        onClick={() => changeCurrentInstrument(instrumentSet)}
        disabled={currentInstrument === instrumentSet}>
        {instrumentLabel}
      </button>
    </div>
  )
}

export default InstrumentSelector
