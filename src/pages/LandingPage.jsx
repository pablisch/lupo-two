import { Link } from "react-router-dom";
import './LandingPage.css';

const Landing = ({ initialSoundSetup }) => {

  return (
    <div onClick={initialSoundSetup} className="landing-page">
      <nav className="landing-nav">
        <h2>LONDON UNDERGROUND PHONY ORCHESTRA</h2>
      </nav>
      <div className="break-line white-break-line"></div>
      <div className="break-line blue-break-line"></div>
      <header className="landing-header">
          <Link to="/sounds-of-the-underground">
            <img src="./images/to-trains.png" className="to-trains-logo" alt="logo"/>
          </Link>
      </header>
      <div className="break-line blue-break-line"></div>
      <div className="break-line white-break-line"></div>
      <section className='landing-blurb'>
          <p className='top-blurb'>Click on the logo above to enter the London Underground music map.</p>
          <p className='mid-blurb'>The London Underground Phony Orchestra is powered by the TFL Unified API which provides a stream of dubious data about train arrivals throughout the entire
            London tube, train, bus and river bus network.</p>
          <p>In this app, each tube train arrival triggers a audio/visual event.</p>
      </section>
    </div>
  );
}

export default Landing;