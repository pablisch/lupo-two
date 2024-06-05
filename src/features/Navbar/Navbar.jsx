import './Navbar.css';
import { Link } from 'react-router-dom';
import fadeAllStations from '../../utils/fadeAllStations';
import { useBurgerMenu } from '../../context/burgerMenuContext';

const Navbar = ({ stop, setTapInVisible }) => {
  const {
    isBurgerOpen,
    handleBurgerToggle,
    isBurgerIconHovered,
    handleBurgerIconHover,
    handleBurgerIconLeave,
  } = useBurgerMenu();

  const navigateAway = () => {
    stop();
    setTapInVisible(true);
  };

  const fadeStationsWhenReturningToMap = () => {
    setTimeout(() => {
      fadeAllStations();
    }, 0);
  };

  return (
    <nav>
      <div className='nav-container'>
        <div className="burger-menu-icon-container">

        <button
          onClick={handleBurgerToggle}
          onMouseEnter={handleBurgerIconHover}
          onMouseLeave={handleBurgerIconLeave}
          className='burger-btn'
          aria-label='open and close hamburger menu'>
          <img
            src='./images/burger-hover-circle.png'
            alt='burger circle icon'
            className='burger-icon burger-circle'
          />
          <img
            src={isBurgerOpen ? './images/burger-open.png' : './images/burger-close.png'}
            alt='burger menu icon'
            className='burger-icon burger-lines'
          />
        </button>
        </div>
        <div className='nav-logo'>
          <h2 id='long-title'>The Arrival Orchestra</h2>
          <h2 id='short-title'>LUPO</h2>
          <img
            src='./images/underground.png'
            alt=''
            className='luso-logo second-logo'
          />
        </div>
        <div className='nav-links'>
          {/data/.test(window.location.href) && (
            <div
              onClick={fadeStationsWhenReturningToMap}
              className='map-link link-btn'>
              <Link to='/sounds-of-the-underground'>Map</Link>
            </div>
          )}
          {/sounds/.test(window.location.href) && (
            <div className='data-link link-btn'>
              <Link to='/data'>Data</Link>
            </div>
          )}
          <div className='exit-link link-btn'>
            <Link to='/' onClick={navigateAway}>
              Exit
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
