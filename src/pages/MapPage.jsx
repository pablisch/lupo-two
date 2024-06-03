import Navbar from '../features/Navbar/Navbar';
import SideBarLeft from '../features/SideBarLeft/SideBarLeft';
import TubeMap from '../features/TubeMap/TubeMap';

const MapPage = ({ isPlaying, handleSpecialServiceToggle, isToggled, handleToggle, currentInstrument, changeCurrentInstrument }) => {
  return (
    <div>
      <Navbar />
      <div className='container bars-and-map'>
        <SideBarLeft
          currentInstrument={currentInstrument}
          // restart={restart}
          // soundOn={soundOn}
          isPlaying={isPlaying}
          // instruments={instruments}
          changeCurrentInstrument={changeCurrentInstrument}
          handleSpecialServiceToggle={handleSpecialServiceToggle}
          // specialServiceIsActive={specialServiceIsActive}
          isToggled={isToggled}
          handleToggle={handleToggle}
        />
        <TubeMap />
      </div>
    </div>
  );
};

export default MapPage;
