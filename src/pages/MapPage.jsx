import Navbar from '../features/Navbar/Navbar';
import SideBarLeft from '../features/SideBarLeft/SideBarLeft';
import TubeMap from '../features/TubeMap/TubeMap';

const MapPage = () => {
  return (
    <div>
      <Navbar />
      <div className='container bars-and-map'>
        <SideBarLeft
          // arrivalFlareEffectsToggle={arrivalFlareEffectsToggle}
          // handleArrivalEffectToggle={handleArrivalEffectToggle}
          // currentInstrument={currentInstrument}
          // restart={restart}
          // soundOn={soundOn}
          // isPlaying={isPlaying}
          // instruments={instruments}
          // changeCurrentInstrument={changeCurrentInstrument}
          // muted={muted}
          // handleMuteButtonClick={handleMuteButtonClick}
          // handleSpecialServiceToggle={handleSpecialServiceToggle}
          // specialServiceToggle={specialServiceToggle}
        />
        <TubeMap />
      </div>
    </div>
  );
};

export default MapPage;
