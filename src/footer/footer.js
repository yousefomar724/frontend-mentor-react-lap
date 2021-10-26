import './footer.css';
import logo from '../assets/images/logo.svg';
import location from '../assets/images/icon-location.svg';
import phone from '../assets/images/icon-phone.svg';
import email from '../assets/images/icon-email.svg';

function footer() {
    return (
        <>

            <footer className="footer">
                <section className="contact">
                    <h3 className="contact__title">Get early access today</h3>
                    <p className="contact__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <div className="contact__form">
                        <input className="contact__input" placeholder="email@example.com" />
                        <button className="contact__btn">Get Started for free</button>
                    </div>
                </section>
                <img src={logo} alt="logo" className='footer__logo' />
                <div className="footer__content">
                    <div className='part'>
                        <img src={location} alt='location icon' className='locationIcon' />
                        <p className='locationText'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                    </div>
                    <div className='part'>
                        <div className='phone'>
                            <img src={phone} alt='' className='phoneIcon' />
                            <span className='phoneNum'>+1-543-123-4567</span>
                        </div>
                        <div className='email'>
                            <img src={email} alt='' className='emailIcon' />
                            <span className='emailText'>example@fylo.com</span>
                        </div>
                    </div>
                    <div className='part'>
                        <h4 className='footer__title'>About Us</h4>
                        <ul>
                            <li>Jobs</li>
                            <li>Press</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className='part'>
                        <h4 className='footer__title'>Contact Us</h4>
                        <ul>
                            <li>Terms</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                    <div className='part'>
                        <i class='bx bxl-facebook'></i>
                        <i class='bx bxl-twitter' ></i>
                        <i class='bx bxl-instagram-alt' ></i>
                    </div>
                </div>
            </footer>
        </>
    );
}
  
export default footer;