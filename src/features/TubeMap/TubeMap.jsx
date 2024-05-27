// import { ReactComponent as Map } from '../../assets/Tube.svg?component';
import Map from '../../assets/Map';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import './TubeMap.css';
import fadeAllStations from '../../utils/fadeAllStations';
import { useEffect } from 'react';
import ErrorBoundary from '../../components/ErrorBoundary';

const TubeMap = () => {
  useEffect(() => { fadeAllStations() }, []);

  return (
    <main>
      <div className="map-wrapper">
        <TransformWrapper
          disablePadding={false}
          initialScale={1.7}
          initialPositionX={0}
          initialPositionY={0}
        >
          <TransformComponent wrapperStyle={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
          contentStyle={{
            width: "100%",
            height: "100%",
            transformOrigin: "center",
            position: "absolute"
            }}>
            <ErrorBoundary>
              
              <Map />
            </ErrorBoundary>
          </TransformComponent>
        </TransformWrapper>
      </div>
    </main>
  );
}

export default TubeMap;
