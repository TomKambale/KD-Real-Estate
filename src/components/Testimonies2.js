import React from 'react';
import '../Testimonials.css';

const Testimonies2 = () => {
  return (
    <section id="testimonies" className="testimonies">
    <div className="testimonials-container">
                  {/* Frame 16 */}
      <div className="testimonials-heading">
        {/* What Our Customers Say */}
        <div className="testimonials-heading-text">What Our Customers Say</div>
      </div>

      {/* Frame 15 */}
      <div className="testimonials-subheading">
        {/* Let us have a look at our clients testimonies */}
        <div className="testimonials-subheading-text">Let us have a look at our clients testimonies</div>
      </div>
      {/* Frame 20 */}
      <div className="testimonials-frame">

        {/* Frame 19 */}
        <div className="testimonials-content">
          {/* "KD Real Estate Agents made my land acquisition process seamless and stress-free... */}
          <div className="testimonials-text">
            "KD Real Estate Agents made my land acquisition process seamless and stress-free.
            From the initial consultation to the final paperwork, their expertise and personalized
            service exceeded my expectations. Asante sana (thank you very much) for your exceptional support!"
          </div>
          {/* “ */}
          <div className="testimonials-quote">“</div>
                {/* Frame 31 */}
      <div className="testimonials-author">
        {/* Amina Hassan */}
        <div className="testimonials-author-name">Amina Hassan</div>
      </div>
        </div>
      </div>


    </div>
    </section>
  );
};

export default Testimonies2;
