import logo from './logo.svg';
import serum from './Images/serum.png';
import hairloss from './Images/hairloss.jpg';
import hair from './Images/hair.jpg';
import './App.css';

function App() {
  return (
    <div className="root">
    <header className="header">
      <img src={logo} alt="Skin Disease Detection logo" className="header-logo"/>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-item">
            <a href="#" className="header-nav-link">Home</a>
          </li>
          <li className="header-nav-item">
            <a href="#" className="header-nav-link">About Us</a>
          </li>
          <li className="header-nav-item">
            <a href="#" className="header-nav-link">Services</a>
          </li>
          <li className="header-nav-item">
            <a href="#" className="header-nav-link">Contact Us</a>
          </li>
          </ul>
        </nav>
        <button className="header-login-button">Login</button>
      </header>
      <main className="main">
        <div className='right-cont'>
          <h1 className='header-title'> ScalpCare </h1>
          <h4 className='head-text2'>HAIR AND SCALP DISEASE IDENTIFIER </h4>
          <button className="detect-button1">Get Started</button>
        </div>
        <div className='left-cont'>
          <img src={serum} className='serum-image'></img>
          <img src={hairloss} className='hairloss-image'></img>
          <img src={hair} className='hair-image'></img>
        </div>
      </main>
    </div>
  );
}

export default App;
