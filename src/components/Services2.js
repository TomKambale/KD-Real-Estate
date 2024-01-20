import React from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import '../Services2.css';

const Services2 = () => {
  return (
    <div className="services2-container">
      {/* WFD heading */}
      <div className="wfd-heading">
        {/* Heading */}
        <div className="heading-container">
          <div className="heading-text">Why Choose KD Real Estate Agents?</div>
        </div>

        {/* Subheading */}
        <div className="subheading-container">
          <div className="subheading-text">Here are reasons for you to work with us</div>
        </div>
      </div>
      {/* CCA */}
      <div className="cca-container">
        <div className="cca-icon"><img src={image1}/></div>
        <div className="cca-text-container">
          <div className="cca-title">Expertise that Transcends Boundaries</div>
          <div className="cca-description">
            Our team comprises seasoned professionals who possess an intricate understanding of the real estate market. We leverage this expertise to navigate the complexities of land transactions seamlessly, ensuring your interests are safeguarded every step of the way.
          </div>
        </div>
      </div>
      <div className="line1"></div>

      {/* ITC */}
      <div className="itc-container">
        <div className="itc-icon"><img src={image2}/></div>
        <div className="itc-text-container">
          <div className="itc-title">Tailored Solutions, Personalized Service</div>
          <div className="itc-description">
            Understanding that every client and property is unique, we craft bespoke strategies to suit your distinct needs. Whether you are seeking to acquire prime land or secure the best value for your property, we tailor our services to align with your goals.
          </div>
        </div>
      </div>
      <div className="line2"></div>

      {/* HRC */}
      <div className="hrc-container">
        <div className="hrc-icon"><img src={image3}/></div>
        <div className="hrc-text-container">
          <div className="hrc-title">Unrivaled Market Insight</div>
          <div className="hrc-description">
            Knowledge is power, especially in the world of real estate. At KD Real Estate Agents, we empower our clients with comprehensive market insights, trends, and data-driven analyses, enabling informed decisions that yield optimal results.
          </div>
        </div>
      </div>
      <div className="line3"></div>

      {/* CCI */}
      <div className="cci-container">
        <div className="cci-icon"><img src={image4}/></div>
        <div className="cci-text-container">
          <div className="cci-title">End-to-End Support</div>
          <div className="cci-description">
            From the initial consultation to the final handshake, we provide unwavering support throughout the entire process. Our team diligently manages negotiations, paperwork, and logistics, allowing you to focus on your aspirations while we handle the intricacies.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services2;
