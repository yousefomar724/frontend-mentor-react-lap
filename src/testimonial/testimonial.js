import './testimonial.css';
import quote from '../assets/images/bg-quotes.png';
import img1 from '../assets/images/profile-1.jpg';
import img2 from '../assets/images/profile-2.jpg';
import img3 from '../assets/images/profile-3.jpg';

function testimonial() {
    return (
        <>
            <section className="testimonial">
            <div className="bg-quote"><img src={quote} alt="..." /></div>
                <div className="card">
                    <p className="card__comment">
                    Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
become a well-oiled collaboration machine.
                    </p>
                    <div className="card__user">
                        <img className="card__user-img" src={img1} alt="..." />
                        <div className="card__user-data">
                            <h4 className="userName">Satish Patel</h4>
                            <p className="userTitle">Founder &and; CEO, Huddle</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <p className="card__comment">
                    Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
become a well-oiled collaboration machine.
                    </p>
                    <div className="card__user">
                        <img className="card__user-img" src={img2} alt="..." />
                        <div className="card__user-data">
                            <h4 className="userName">Bruce McKenzie</h4>
                            <p className="userTitle">Founder &and; CEO, Huddle</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <p className="card__comment">
                    Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
become a well-oiled collaboration machine.
                    </p>
                    <div className="card__user">
                        <img className="card__user-img" src={img3} alt="..." />
                        <div className="card__user-data">
                            <h4 className="userName">Iva Boyd</h4>
                            <p className="userTitle">Founder &and; CEO, Huddle</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
  
export default testimonial;