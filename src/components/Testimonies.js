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
