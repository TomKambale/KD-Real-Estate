import React from 'react';
import image from "../assets/farm.png";
import '../App.css'; // Import your CSS file

const About = () => {
return (
    <section id="about" className="about-section">
          <img src={image} className="farm img-fluid" alt="shamba"  />

            <div className="text-component " >
              <div className='abtitle'>
                <h2 className="lead ">
                We are your Premier Partner<p>in Land Acquisition and Sales</p> 
              </h2>
              </div>
              <div className='abtext'>
                <p >
                At KD Real Estate Agents, we are not just facilitators.
                <p>We are
                your dedicated partners in realizing your land acquisition and
                sales aspirations.</p>
                <p>With a legacy of excellence and a commitment
                to unparalleled service, we are your beacon</p>
                <p>in the dynamic
                landscape of real estate.</p> 
              </p>
              </div>
            </div>
    </section>
  );
};

export default About;
