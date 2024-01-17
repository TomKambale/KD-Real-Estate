// import React from 'react';
// import image1 from '../assets/image1.png';
// import image2 from '../assets/image2.png';
// import image3 from '../assets/image3.png';
// import image4 from '../assets/image4.png';

// function Services() {
//   const columnsData = [
//     {
//       image: image1,
//       title: 'Expertise that Transcends Boundaries',
//       text: 'Our team comprises seasoned professionals who possess an intricate understanding of the real estate market. We leverage this expertise to navigate the complexities of land transactions seamlessly, ensuring your interests are safeguarded every step of the way.',
//     },
//     {
//       image: image2,
//       title: 'Tailored Solutions, Personalized Service',
//       text: 'Understanding that every client and property is unique, we craft bespoke strategies to suit your distinct needs. Whether you are seeking to acquire prime land or secure the best value for your property, we tailor our services to align with your goals.',
//     },
//     {
//       image: image3,
//       title: 'Unrivaled Market Insight',
//       text: 'Knowledge is power, especially in the world of real estate. At KD Real Estate Agents, we empower our clients with comprehensive market insights, trends, and data-driven analyses, enabling informed decisions that yield optimal results.',
//     },
//     {
//       image: image4,
//       title: 'End-to-End Support',
//       text: 'From the initial consultation to the final handshake, we provide unwavering support throughout the entire process. Our team diligently manages negotiations, paperwork, and logistics, allowing you to focus on your aspirations while we handle the intricacies.',
//     },
//   ];

//   return (
//     <section id="services" className="services-section">
//       <div className="container">
//         <div className="row">
//           {columnsData.map((column, index) => (
//             <div key={index} className="col-md-3">
//               <img src={column.image} className="img-fluid rounded" alt={column.title} />
//               <strong className="text mt-2">{column.title}</strong>
//               <p>{column.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Services;

import React from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';

function Services() {
  const columnsData = [
    {
      image: image1,
      title: 'Expertise that Transcends Boundaries',
      text: 'Our team comprises seasoned professionals who possess an intricate understanding of the real estate market. We leverage this expertise to navigate the complexities of land transactions seamlessly, ensuring your interests are safeguarded every step of the way.',
    },
    {
      image: image2,
      title: 'Tailored Solutions, Personalized Service',
      text: 'Understanding that every client and property is unique, we craft bespoke strategies to suit your distinct needs. Whether you are seeking to acquire prime land or secure the best value for your property, we tailor our services to align with your goals.',
    },
    {
      image: image3,
      title: 'Unrivaled Market Insight',
      text: 'Knowledge is power, especially in the world of real estate. At KD Real Estate Agents, we empower our clients with comprehensive market insights, trends, and data-driven analyses, enabling informed decisions that yield optimal results.',
    },
    {
      image: image4,
      title: 'End-to-End Support',
      text: 'From the initial consultation to the final handshake, we provide unwavering support throughout the entire process. Our team diligently manages negotiations, paperwork, and logistics, allowing you to focus on your aspirations while we handle the intricacies.',
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className='services-heading'>Why Choose KD Real Estate Agents?</h2>
        <p>
            <h2 className='services-sub'>Here are reasons for you to work with us  </h2>
        </p>
        <div className="row">
          {columnsData.map((column, index) => (
            <div key={index} className={`col-md-3 ${index < columnsData.length - 1 ? 'border-end' : ''}`}>
              <img
                src={column.image}
                className="img-fluid rounded"
                alt={column.title}
                style={{ width: '122.97px', height: '115px', objectFit: 'cover', objectPosition: 'top left' }}
              />
              <p>              
                <strong className="text mt-2">{column.title}</strong>
                </p>
              <p className="text mt-2">{column.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
