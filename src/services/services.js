import './services.css';
import service1 from '../assets/images/icon-access-anywhere.svg';
import service2 from '../assets/images/icon-security.svg';
import service3 from '../assets/images/icon-collaboration.svg';
import service4 from '../assets/images/icon-any-file.svg';

function services() {
    return (
        <>
            <section className="services">
                <div className="service">
                    <img src={service1} alt="..." className="service__img" />
                    <h3 className="service__title">Access your files, anywhere</h3>
                    <p className="service__text">The ability to use a smartphone, tablet, or computer to access your account means your 
  files follow you everywhere.</p>
                </div>
                <div className="service">
                    <img src={service2} alt="..." className="service__img" />
                    <h3 className="service__title">Security you can trust</h3>
                    <p className="service__text">2-factor authentication and user-controlled encryption are just a couple of the security 
  features we allow to help secure your files.</p>
                </div>
                <div className="service">
                    <img src={service3} alt="..." className="service__img" />
                    <h3 className="service__title">Real-time collaboration</h3>
                    <p className="service__text">Securely share files and folders with friends, family and colleagues for live collaboration. 
  No email attachments required.</p>
                </div>
                <div className="service">
                    <img src={service4} alt="..." className="service__img" />
                    <h3 className="service__title">Store any type of file</h3>
                    <p className="service__text">Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
  file types to be securely stored and shared.</p>
                </div>
            </section>
        </>
    );
}
  
export default services;