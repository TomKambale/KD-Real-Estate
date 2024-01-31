import React from 'react';
import '../Navbar.css'; // Update the import statement to match the CSS file location

function Navbar() {
    const handleContactClick = () => {
        window.location.href = "mailto:info@kdreal.com?subject=Land%20Purchase%20or%20Sale%20Inquiry";
      };
  return (
    <section id='nav' className='navigation'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <h4 className='logo-text'>KD</h4>

        <div className="container-fluid">
          <a className="navbar-brand text-bold" href="/">KD REAL ESTATE</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#about">About</a>
            <a className="nav-link active" href="#services">Services</a>
            <a className="nav-link active " href="#testimonies2">Testimonies</a>
            <button className="contact-b" onClick={handleContactClick}>Get in Touch </button>
            </div>   
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
