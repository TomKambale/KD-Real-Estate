// // // import React from 'react';
// // // import image from "../assets/farmsunset.jpg";
// // // import '../App.css'; // Import your CSS file

// // // const About = () => {
// // //     const backgroundImageStyle = {
// // //         backgroundImage: `url(${image})`,
// // //         backgroundSize: 'cover',
// // //         backgroundRepeat: 'no-repeat',
// // //         backgroundPosition: 'center center',
// // //         color: 'white',
// // //         padding: '20px',
// // //         // Add any other background or text styles as needed
// // //       };
      

// // //   return (
// // //     <section id="about" className="about-section">
// // //       <div className="container">
// // //         <div className="row">
// // //           <div className="col-6">
// // //           {/* <img src={image} className="rounded img-fluid" alt="shamba" /> */}
// // //             <div className="text-component" style={backgroundImageStyle}>
// // //               <h2 className="mt-4 text-center lead italic">
// // //                 We are your Premier Partner in Land Acquisition and Sales
// // //               </h2>
// // //               {/* Additional text content */}
// // //               <p className='about-component'>
// // //                 At KD Real Estate Agents, we are not just facilitators; we are
// // //                 your dedicated partners in realizing your land acquisition and
// // //                 sales aspirations. With a legacy of excellence and a commitment
// // //                 to unparalleled service, we are your beacon in the dynamic
// // //                 landscape of real estate.
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default About;

// // import React from 'react';
// // import image from "../assets/farmsunset.jpg";
// // import '../App.css'; // Import your CSS file

// // const About = () => {
// //   const backgroundImageStyle = {
// //     backgroundImage: `url(${image})`,
// //     backgroundSize: 'cover',
// //     backgroundRepeat: 'no-repeat',
// //     backgroundPosition: 'center center',
// //     // backgroundAttachment: 'fixed', // Add this line for a parallax effect
// //     color: 'white',
// //     padding: '20px',
// //     // Add any other background or text styles as needed
// //   };

// //   return (
// //     <section id="about" className="about-section">
// //       <div className="container">
// //         <div className="row">
// //           <div className="col-6">
// //             <div className="text-component" style={backgroundImageStyle}>
// //               <h2 className="mt-4 text-center lead italic">
// //                 We are your Premier Partner in Land Acquisition and Sales
// //               </h2>
// //               {/* Additional text content */}
// //               <p className='about-component'>
// //                 At KD Real Estate Agents, we are not just facilitators; we are
// //                 your dedicated partners in realizing your land acquisition and
// //                 sales aspirations. With a legacy of excellence and a commitment
// //                 to unparalleled service, we are your beacon in the dynamic
// //                 landscape of real estate.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default About;

// import React from 'react';
// import image from "../assets/farmsunset.jpg";
// import '../App.css'; // Import your CSS file

// const About = () => {
//   const backgroundImageStyle = {
//     backgroundImage: `url(${image})`,
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center center',
//     backgroundAttachment: 'fixed', // Add this line for a parallax effect
//     color: 'white',
//     padding: '20px',
//     // Add any other background or text styles as needed
//   };

//   const imageStyle = {
//     width: '1440px',
//     height: '594px',
//     top: '80px',
//     left: '-14px',
//     position: 'absolute',
    
//   };

//   return (
//     <section id="about" className="about-section">
//       <div className="container">
//         <div className="row">
//           <div className="col-6">
//             <div className="text-component" style={backgroundImageStyle}>
//               <img src={image} className="rounded img-fluid" alt="shamba" style={imageStyle} />
//               <h2 className="mt-4 text-center lead italic">
//                 We are your Premier Partner in Land Acquisition and Sales
//               </h2>
//               {/* Additional text content */}
//               <p className='about-component'>
//                 At KD Real Estate Agents, we are not just facilitators; we are
//                 your dedicated partners in realizing your land acquisition and
//                 sales aspirations. With a legacy of excellence and a commitment
//                 to unparalleled service, we are your beacon in the dynamic
//                 landscape of real estate.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from 'react';
import image from "../assets/farmsunset.jpg";
import '../App.css'; // Import your CSS file

const About = () => {
//   const imageStyle = {
//     width: '1440px',
//     height: '594px',
//     top: '80px',
//     left: '-14px',
//     position: 'absolute',
//     color: 'white',
//   };

  return (
    <section id="about" className="about-section">
      <div className="container-about">
        <div className="row">
          <div className="semaje">
            <div className="text-component" >
              <img src={image} className="farm img-fluid" alt="shamba"  />
              <h2 className="mt-4 text-center lead italic">
                We are your Premier Partners in Land Acquisition and Sales
              </h2>
              {/* Additional text content */}
              <p className='about-component'>
                At KD Real Estate Agents, we are not just facilitators; we are
                your dedicated partners in realizing your land acquisition and
                sales aspirations. With a legacy of excellence and a commitment
                to unparalleled service, we are your beacon in the dynamic
                landscape of real estate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
