import React from "react";
import "../Contacts.css"; // Update the import statement to match the CSS file location

function Contact2() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="footer-top">
        <div className="company-logo-motto">
          <div className="kd">KD</div>
          <div className="kd-real-estate">KD REAL ESTATE</div>
            <div className="motto">
              <p className="text-3">
                Customer experience is at the forefront of our engagements and
                we have developed value across all industries to grow and
                increase customer loyalty to our brand.
              </p>
            </div>
          </div>
          <div className="footer-buttons">
            <div className="buttons">
              <div className="browse">
                <p className="browse-title">Browse</p>
                <div className="browse-buttons">
                  <p className="text-11">About</p>
                  <p className="text-5">Services</p>
                  <p className="text-6">Testimonies</p>
                  <p className="text-6">Contact Us</p>
                </div>
              </div>
              {/* <div className="services">
                <p className="services-title">Services</p>
                <div className="services-buttons">
                  <p className="text-7">Service 1</p>
                  <p className="text-8">Service 2</p>
                </div>
              </div> */}
              <div className="contact-us">
                <p className="contact-us-title">Contact Us</p>
                <div className="contact-us-buttons">
                  <p className="text-9">Phone: 0720899224</p>
                  <p className="text-9">Email: info@kdrealestate.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
          <p className="made-by-leonsholo">Design By Leon Sholo</p>
        </div>
    </section>
  );
}

export default Contact2;
