import Navbar from '../features/Navbar/Navbar';
import SideBarLeft from '../features/SideBarLeft/SideBarLeft';
import TubeMap from '../features/TubeMap/TubeMap';

const MapPage = ({ isPlaying }) => {
  return (
    <div>
      <Navbar />
      <div className='container bars-and-map'>
        <SideBarLeft
          // currentInstrument={currentInstrument}
          // restart={restart}
          // soundOn={soundOn}
          isPlaying={isPlaying}
          // instruments={instruments}
          // changeCurrentInstrument={changeCurrentInstrument}
          // handleSpecialServiceToggle={handleSpecialServiceToggle}
          // specialServiceIsActive={specialServiceIsActive}
        />
        <TubeMap />
      </div>
    </div>
  );
};

export default MapPage;
