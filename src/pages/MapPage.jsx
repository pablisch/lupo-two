import Navbar from '../features/Navbar/Navbar';
import SideBarLeft from '../features/SideBarLeft/SideBarLeft';
import TubeMap from '../features/TubeMap/TubeMap';

const MapPage = ({
  isPlaying,
  flareEffectsOn,
  handleFlareToggle,
}) => {
  return (
    <div>
      <Navbar />
      <div className='container bars-and-map'>
        <SideBarLeft
          flareEffectsOn={flareEffectsOn}
          handleFlareToggle={handleFlareToggle}
          // currentInstrument={currentInstrument}
          // restart={restart}
          // soundOn={soundOn}
          isPlaying={isPlaying}
          // instruments={instruments}
          // changeCurrentInstrument={changeCurrentInstrument}
          // handleSpecialServiceToggle={handleSpecialServiceToggle}
          // specialService={specialService}
        />
        <TubeMap />
      </div>
    </div>
  );
};

export default MapPage;
