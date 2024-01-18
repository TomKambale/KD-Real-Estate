// import React from 'react'

// function Testimonies() {
//   return (
//     <section id='testimonies' className='testimonies'>
// <div className="container">
// <div class="container text-center">
//     <h2>What our customers say</h2>
//     <p>Let us have a look at our clients testimonies</p>
// </div>

//         <div id="testimonialsCarousel" className="carousel slide" data-bs-ride="carousel">
//           <div className="carousel-inner">
//             <div className="carousel-item active">
//               <div className="row">
//                 <div className="col align-self-start">
//                   <div className="card rounded">
//                     <div className="card-body">
//                       <h3 className="card-title">Amina Njeri</h3>
//                       <p className="card-text">
//                         "KD Real Estate Agents made my land acquisition process seamless and stress-free. From the initial consultation to the final paperwork, their expertise and personalized service exceeded my expectations. Asante sana (thank you very much) for your exceptional support!"
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col align-self-center">
//                   <div className="card rounded">
//                     <div className="card-body">
//                       <h3 className="card-title">Juma Saidi</h3>
//                       <p className="card-text">
//                         "Working with KD Real Estate Agents was a game-changer for me. Their commitment to understanding my needs and providing tailored solutions was impressive. I highly recommend their services to anyone in the real estate market."
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col align-self-end">
//                   <div className="card rounded">
//                     <div className="card-body">
//                       <h3 className="card-title">Fatma Gichuru</h3>
//                       <p className="card-text">
//                         "I'm incredibly grateful to KD Real Estate Agents for their unwavering support throughout my land sale process. Their market insights and end-to-end assistance made all the difference. Asante kwa huduma bora (thank you for excellent service)!"
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Additional carousel items can be added here */}
//           </div>
//         </div>
//       </div>    </section>
//   )
// }

// export default Testimonies

import React from "react";
import "../App.css";

function Testimonies() {
  return (
    <section id="testimonies" className="testimonies">
      <div className="container">
        <div className="container text-center">
          <h2>
            <strong>What our customers say</strong>
          </h2>
          <p>Let us have a look at our clients' testimonies</p>
        </div>

        <div
          id="testimonialsCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                {/** Card 1 */}
                <div className="col ">
                  <div className="card rounded shadow">
                    <div className="card-body">
                      <p className="card-text">
                        "KD Real Estate Agents made my land acquisition process
                        seamless and stress-free. From the initial consultation
                        to the final paperwork, their expertise and personalized
                        service exceeded my expectations. Asante sana (thank you
                        very much) for your exceptional support!"
                      </p>
                    </div>
                  </div>
                  <p>
                    <br></br>
                    <h3 className="card-title mb-0 text-center">Amina Njeri</h3>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonies;
