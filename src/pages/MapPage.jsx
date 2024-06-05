import Navbar from '../features/Navbar/Navbar';
import SideBarLeft from '../features/SideBarLeft/SideBarLeft2';
import TubeMap from '../features/TubeMap/TubeMap';

const MapPage = ({ isPlaying, handleSpecialServiceToggle, isToggled, handleToggle, currentInstrument, changeCurrentInstrument, instruments }) => {

  return (
    <div>
      <Navbar />
      <div className='map-container bars-and-map'>
        <SideBarLeft
          currentInstrument={currentInstrument}
          // restart={restart}
          // soundOn={soundOn}
          isPlaying={isPlaying}
          instruments={instruments}
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
