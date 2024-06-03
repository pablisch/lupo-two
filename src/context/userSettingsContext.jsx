import { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Tone from 'tone';

export const UserSettingsContext = createContext();

export const UserSettingsProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [flareEffectsAreOn, setFlareEffectsAreOn] = useState(false);
  const [specialServiceIsActive, setSpecialServiceIsActive] = useState(false);

  const handleMuteToggle = () => {
    Tone.Destination.mute = !isMuted;
    setIsMuted(() => !isMuted);
    console.log('Mute status:', isMuted);
  };

  // TEMPORARY MUTE CHECK FOR IF DEV MUTING BY DEFAULT - CAN BE REMOVED
  useEffect(() => {
    if (isMuted) Tone.Destination.mute = true;
  }, []);

  return (
    <UserSettingsContext.Provider value={{ isMuted, handleMuteToggle, flareEffectsAreOn, setFlareEffectsAreOn, specialServiceIsActive, setSpecialServiceIsActive }}>
      {children}
    </UserSettingsContext.Provider>
  );
};

UserSettingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useUserSettings = () => {
  const context = useContext(UserSettingsContext);
  if (context === undefined) {
    throw new Error(
      'useUserSettings must be used within a UserSettingsProvider'
    );
  }
  return context;
};
