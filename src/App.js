import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Testimonies from './components/Testimonies';
import 'bootstrap/dist/css/bootstrap.min.css';



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
