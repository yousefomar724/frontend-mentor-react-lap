/* eslint-disable jsx-a11y/anchor-is-valid */
import './Hero.css';
import logo from '../assets/images/logo.svg';
import mainImg from '../assets/images/illustration-intro.png';

function Hero() {
    return (
      <>
    <div className="bg">
    <nav className="navbar nav">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="logo" alt="logo" src={logo} />
          </a>
          <ul className="d-flex flex-row justify-content-around">
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Sign In</a>
            </li>
          </ul>
        </div>
      </nav>
      
      
      <section className="main">
          <img className="main__img" alt="vector img" src={mainImg} />
          <h2 className="main__heading">All your files in one secure location, accessible anywhere.</h2>
          <p className="main__text">Fylo stores all your most important files in one secure location. Access them wherever
            you need, share and collaborate with friends family, and co-workers.</p>
          <button className="main__btn">Get Started</button>
      </section>
      </div>
      </>
    );
  }
  
export default Hero;