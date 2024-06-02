import { useState } from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ isToggled, handleToggle, labelId, label }) => {
  return (
    <div className='toggle-switch-container'>
      <label id={labelId} className="toggle-switch-label">{label}</label>
      <label className="toggle-switch">
        <input 
          type="checkbox" 
          checked={isToggled} 
          onChange={handleToggle} 
          aria-labelledby={labelId} // Reference external label
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
