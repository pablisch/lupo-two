import Navbar from '../features/Navbar/Navbar';
import SideBarLeft from '../features/SideBarLeft/SideBarLeft';
import TubeMap from '../features/TubeMap/TubeMap';

const MapPage = ({ muted, handleMuteButtonClick }) => {
  return (
    <div>
      <Navbar />
      <div className='container bars-and-map'>
        <SideBarLeft
          // flareEffects={flareEffects}
          // handleArrivalEffectToggle={handleArrivalEffectToggle}
          // currentInstrument={currentInstrument}
          // restart={restart}
          // soundOn={soundOn}
          // isPlaying={isPlaying}
          // instruments={instruments}
          // changeCurrentInstrument={changeCurrentInstrument}
          muted={muted}
          handleMuteButtonClick={handleMuteButtonClick}
          // handleSpecialServiceToggle={handleSpecialServiceToggle}
          // specialService={specialService}
        />
        <TubeMap />
      </div>
    </div>
  );
};

export default MapPage;
