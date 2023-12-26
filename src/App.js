import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
// import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Testimonies from './components/Testimonies';


const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Testimonies/>
      <Contact />
      
    </div>
  );
};

export default App;
