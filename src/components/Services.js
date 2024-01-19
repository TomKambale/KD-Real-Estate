import React from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import '../App.css';

function Services() {
  return (
    <section id="services" className="services-section">
      {/* <div className="container"> */}
        <div className='why'>
          <h2 className='services-heading'>Why Choose KD Real Estate Agents</h2>
          <p>
            <h2 className='services-sub'>Here are reasons for you to work with us</h2>
          </p>
        </div>
        
        <div className="services-row">
            <div className='wera'>         
             {/* Service 1 */}
          <div className="col-md-3 border-end service1">
            <img
              src={image1}
              className="img-fluid rounded service-image-1"
              alt="Service 1"
            />
            <p> 
                <div className='text1'></div>             
              <strong className="text mt-2 service-h1 ">Expertise that <p>Transcends Boundaries</p></strong>
            </p>
            <p className="text mt-2 service-s1">
              Our team comprises seasoned professionals who possess an intricate understanding of the real estate market. We leverage this expertise to navigate the complexities of land transactions seamlessly, ensuring your interests are safeguarded every step of the way.
            </p>
          </div>

          {/* Service 2 */}
          <div className="col-md-3 border-end service2">
            <img
              src={image2}
              className="img-fluid rounded service-image-2"
              alt="Service 2"
            />
            <div className='text2'></div> 
            <p>  
              <strong className="text mt-2 service-h2">Tailored Solutions, Personalized Service</strong>
            </p>
            <p className="text mt-2 service-s2">
              Understanding that every client and property is unique, we craft bespoke strategies to suit your distinct needs. Whether you are seeking to acquire prime land or secure the best value for your property, we tailor our services to align with your goals.
            </p>
          </div>

          {/* Service 3 */}
          <div className="col-md-3 border-end service3">
            <img
              src={image3}
              className="img-fluid rounded service-image-3"
              alt="Service 3"
            />
            <div className='text3'></div> 
            <p>              
              <strong className=" service-h3">Unrivaled Market Insight <p><br></br> </p></strong>
            </p>
            <p className=" service-s3">
              Knowledge is power, especially in the world of real estate. At KD Real Estate Agents, we empower our clients with comprehensive market insights, trends, and data-driven analyses, enabling informed decisions that yield optimal results.
            </p>
          </div>

          {/* Service 4 */}
          <div className="col-md-3 service4">
            <img
              src={image4}
              className="img-fluid rounded service-image-4"
              alt="Service 4"
            />
            <div className='text4'></div> 
            <p>              
              <strong className="text mt-2 service-h4">End-to-End Support<p><br></br></p></strong>
            </p>
            <p className="text mt-2 service-s4">
              From the initial consultation to the final handshake, we provide unwavering support throughout the entire process. Our team diligently manages negotiations, paperwork, and logistics, allowing you to focus on your aspirations while we handle the intricacies.
            </p>
          </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
}

export default Services;

