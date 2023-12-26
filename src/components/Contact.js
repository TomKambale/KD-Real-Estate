// Contact.js
import React from 'react';


const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="row">
                    {/* "Real estate cannot be lost or stolen, nor can it be carried away. Purchased with common sense, paid for in full, and managed with reasonable care, it is about the safest investment in the world." - Franklin D. Roosevelt */}
  {/* <figure class="text-end">
  <blockquote class="blockquote">
    <p>"Real estate cannot be lost or stolen, nor can it be carried away. Purchased with common sense, paid for in full, and managed with reasonable care, it is about the safest investment in the world."</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Franklin D. Roosevelt in <cite title="Source Title">an address on October 21, 1933</cite>
  </figcaption>
</figure> */}
          
          </div>
          <div className="contact">
            <h2>Contact Us</h2>
            <p>
              Have a question or ready to get started? Reach out to us today and let's embark on this real estate journey together.
            </p>
            <ul className="list-unstyled">
              
              <li>
                {/* <span className="lord-icon-wrapper" style={{ width: '250px', height: '250px' }}>
                  <lord-icon
                    src="https://cdn.lordicon.com/rsvfayfn.json"
                    trigger="morph"
                    colors="primary:#ffffff,secondary:#ffffff"
                  ></lord-icon>
                </span> */}

                Phone: 0720899224
              </li>
              <li>
                {/* <span className="lord-icon-wrapper" style={{ width: '50px', height: '50px' }}>
                  <lord-icon
                    src="https://cdn.lordicon.com/xtnsvhie.json"
                    trigger="hover"
                    colors="primary:#ffffff,secondary:#ffffff"
                  ></lord-icon>
                </span> */}
                Email   : info@kdrealestate.com
              </li>
            </ul>
          </div>
          <div className="motivation">

        </div>
      </div>
    </section>
  );
};

export default Contact;


