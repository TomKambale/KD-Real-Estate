// About.js
import React from "react";
// import Background from '../assets/acres.jpg';
import Background1 from "../assets/farmsunset.jpg";
// import { Carousel } from 'bootstrap'; // Import Carousel from Bootstrap

import image from "../assets/moses.jpg";
// import image1 from '../assets/area.jpg';
import "../App.css";

const About = () => {
  // import Background1 from '../assets/farmsunset.jpg'
  const sectionStyle = {
    backgroundImage: `url(${Background1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",

    // Add other background properties as needed
  };
  return (
    <section id="about" className="about-section" style={sectionStyle}>
      <div className="container">
        <div className="row">
          <div className="mt-2 col-lg-12">
            <div className="row justify-content-center unstyled">
              <div className="col-4 ">
                <h2 className="mt-4 text-center lead italic text-black ">
                  Your Premier Partner in Land Acquisition and Sales
                </h2>
              </div>
              <div className="col-6">
                <img src={image} className="rounded img-fluid" alt="shamba" />
                {/* <div className="mt-3 text-center">
                  <h5>Field Trip</h5>
                  <p>Some representative placeholder content for the image.</p>
                </div> */}
              </div>
            </div>
            <div className="plain ">
              <p>
                At KD Real Estate Agents, we are not just facilitators; we are
                your dedicated partners in realizing your land acquisition and
                sales aspirations. With a legacy of excellence and a commitment
                to unparalleled service, we are your beacon in the dynamic
                landscape of real estate.
              </p>
              <h3 className="mt-4 text-center text-#4D5B5D">
                Why Choose KD Real Estate Agents?
              </h3>
              <ul className="list-unstyled">
                <p>
                  <li>
                    <strong className="text">
                      Expertise that Transcends Boundaries:
                    </strong>
                    <br />
                    Our team comprises seasoned professionals who possess an
                    intricate understanding of the real estate market. We
                    leverage this expertise to navigate the complexities of land
                    transactions seamlessly, ensuring your interests are
                    safeguarded every step of the way.
                  </li>
                </p>
                <p>
                  <li>
                    <strong className="text">
                      Tailored Solutions, Personalized Service:
                    </strong>
                    <br />
                    Understanding that every client and property is unique, we
                    craft bespoke strategies to suit your distinct needs.
                    Whether you are seeking to acquire prime land or secure the
                    best value for your property, we tailor our services to
                    align with your goals.
                  </li>
                </p>
                <p>
                  <li>
                    <strong className="text">Unrivaled Market Insight:</strong>
                    <br />
                    Knowledge is power, especially in the world of real estate.
                    At KD Real Estate Agents, we empower our clients with
                    comprehensive market insights, trends, and data-driven
                    analyses, enabling informed decisions that yield optimal
                    results.
                  </li>
                </p>
                <p>
                  <li>
                    <strong className="text">End-to-End Support:</strong>
                    <br />
                    From the initial consultation to the final handshake, we
                    provide unwavering support throughout the entire process.
                    Our team diligently manages negotiations, paperwork, and
                    logistics, allowing you to focus on your aspirations while
                    we handle the intricacies.
                  </li>
                </p>
              </ul>
              <p>
                <strong className="text">Our Commitment to You:</strong>
                <br />
                We understand that acquiring or selling land is more than a
                transaction; it's a pivotal moment in your journey. KD Real
                Estate Agents commits to fostering a transparent, trustworthy,
                and collaborative relationship, ensuring that your ambitions are
                not just met but exceeded.
              </p>
              <p className="lead text-center">
                <em>Let's Embark on This Journey Together</em>
              </p>
              <p>
                Embark on a transformative journey in the world of real estate
                with KD Real Estate Agents. Partner with us, and unlock a world
                of opportunities, unwavering support, and unmatched expertise.
                Your aspirations are our priority, and together, we'll redefine
                success in land acquisition and sales.
              </p>
            </div>
            <p className="text-center">
              <strong>
                Contact us today to take the first step toward realizing your
                real estate dreams.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
