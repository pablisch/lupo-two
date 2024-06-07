// import { ReactComponent as Map } from '../../assets/Tube.svg?component';
// import Map from '../../assets/Map';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import './TubeMap.css';
import fadeAllStations from '../../utils/fadeAllStations';
import { useEffect } from 'react';
import TubeSvg from './TubeSvg';
import TubeCheck from './TubeCheck';
import TubeEdit12 from './TubeEdit12';
import SvgTubeEdit13 from './TubeEdit13';
import TubeEdit14 from './TubeEdit14';

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
            {/* <TubeSvg /> */}
            {/* <TubeEdit12 /> */}
            {/* <SvgTubeEdit13 /> */}
            <TubeEdit14 />
            {/* <TubeCheck /> */}
            {/* <Map /> */}
          </TransformComponent>
        </TransformWrapper>
      </div>
    </main>
  );
};

export default TubeMap;
