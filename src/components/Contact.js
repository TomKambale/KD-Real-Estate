// // Contact.js
// import React from 'react';

// const Contact = () => {
//   return (
//     <section id="contact" className="contact">
//       <div className="container">
//         <div className="row">
//         <div className="mt-2 col-lg-12 text-center">

//           <div className="contact">
//             <h2>Contact Us</h2>
//             <p>
//               Have a question or ready to get started? Reach out to us today and let's embark on this real estate journey together.
//             </p>
//             <ul className="list-unstyled">

//               <li>
//                 Phone: 0720899224
//               </li>
//               <li>
//                 Email   : info@kdrealestate.com
//               </li>
//             </ul>
//                 {/* <div className="motivation"> */}
//                   <p className='footer text-center'>Syre Consultancy- 2023</p>
//         </div>
//           </div>
//           </div>
//           </div>
//       {/* </div> */}
//     </section>
//   );
// };

// export default Contact;

import React from "react";
import '../App.css';


const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 mt-2 text-start">
            <div className="contact-column">
              <h2>KD REAL ESTATE</h2>
              <p>
                Customer experience is at the forefront of our engagements and
                we have developed value across all industries to grow and
                increase customer loyalty to our brand.
              </p>
            </div>
          </div>

          <div className="col-lg-3 mt-2 text-center">
            <div className="contact-column">
              <h4>Browse</h4>
              <ul className="list-unstyled">
                <li>About</li>
                <li>Services</li>
                <li>Testimonies</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 mt-2 text-center">
            <div className="contact-column">
              <h4>Services</h4>
              <ul className="list-unstyled">
                <li>About</li>
                <li>Services</li>
                <li>Testimonies</li>
              </ul>
              {/* Additional column content goes here */}
            </div>
          </div>

          <div className="col-lg-3 mt-2 text-center">
            <div className="contact-column">
                <h4>Contact Us</h4>
            Phone: 0720899224
            <p/>
                Email: info@kdrealestate.com
              {/* Additional column content goes here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
