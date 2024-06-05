import './ToggleSwitch.css';
import '../Controls.css';

const ToggleSwitch = ({ isOn, handleToggle, labelId, label, className = 'control-container' }) => {

  const handleInputClick = (event) => {
    event.stopPropagation();
    // handleToggle();
  };

  return (
    <button onClick={handleToggle} className={className}>
      <label id={labelId} className="toggle-switch-label">{label}</label>
      <label className="toggle-switch">
        <input 
          className="toggle-switch-input"
          type="checkbox" 
          checked={isOn} 
          onChange={(event) => event.stopPropagation()} 
          onClick={handleInputClick} 
          aria-labelledby={labelId} // Reference external label
        />
        <span className="toggle"></span>
      </label>
    </button>
  );
};

export default ToggleSwitch;
