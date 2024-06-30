import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import './TubeMap.css';
import fadeAllStations from '../../utils/fadeAllStations';
import { useEffect } from 'react';
// import TubeEdit30 from './tubeEdit30';
import TubeEdit44 from './tubeEdit44';

const TubeMap = () => {
  useEffect(() => {
    fadeAllStations();
  }, []);

  return (
    <main className='map-container'>
      <div className='map-wrapper'>
        <TransformWrapper
          disablePadding={true}
          initialScale={1.7}
          initialPositionX={-370}
          initialPositionY={-320}>
          <TransformComponent
            wrapperStyle={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            contentStyle={{
              width: '100%',
              height: '100%',
              position: 'absolute',
            }}>
            {/* <TubeEdit30 /> */}
            <TubeEdit44 />
          </TransformComponent>
        </TransformWrapper>
      </div>
      <div className="map-bottom-spacer"></div>
    </main>
  );
};

export default TubeMap;
