/* eslint-disable jsx-a11y/anchor-is-valid */
import './about.css';
import mainImg from '../assets/images/illustration-stay-productive.png';
import arrow from '../assets/images/icon-arrow.svg';

function about() {
    return (
        <>
            <section className="about">
                <img src={mainImg} alt="..." className="about__img" />

                <div className="about__content">
                    <h2 className="about__title">
                    Stay productive, wherever you are
                    </h2>
                    <p className="about__text">
                    Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
                    </p>
                    <p className="about__text">
                    Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
                    </p>
                    <a className="about__btn">See Fylo works <img src={arrow} alt="..." /></a>
                </div>
            </section>
        </>
    );
}
  
export default about;