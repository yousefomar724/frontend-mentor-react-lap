import Hero from "./Hero/Hero";
import Services from './services/services';
import About from './about/about';
import Testimonial from "./testimonial/testimonial";
import Footer from './footer/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <About />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;