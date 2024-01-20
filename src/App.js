import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
// import Contact from './components/Contact';
// import Testimonies from './components/Testimonies';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './components/Services';
import Contact2 from './components/Contact2';
import Testimonies2 from './components/Testimonies2';
// import Services2 from './components/Services2';



const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Services/>
      {/* <Services2/> */}
      {/* <Testimonies/> */}
      <Testimonies2/>
      {/* <Contact /> */}
      <Contact2 />      
    </div>
  );
};

export default App;
