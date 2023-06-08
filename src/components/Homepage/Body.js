// import React from 'react'

// const Body = () => {
//   return (
//     <div>
       
//     <div>
//     <h1>eCOLLEGE XPRESS: THE DIGITAL EXPRESS GAZETTE </h1>
//       <h1>Together we build a better tomorrow</h1>
      
//     </div>


//     </div>
//   )
// }

// export default Body
import React from 'react';
import './BodyPage.css'; // Import the CSS file for styling

// import attractiveImage from './assets/attractive-image.jpg'; // Import the attractive image from the assets folder or use a URL

const BodyPage = () => {
  return (
    <div className="body-page">
      <div className="arc-container">
        <div className="arc-content">
          <h1>eCOLLEGE XPRESS: THE DIGITAL EXPRESS GAZETTE</h1>
          <p>Together we build a better tomorrow</p>
         
        </div>
        <div className="container" >
        <video className="video" src="/videos/gen.mp4" autoPlay loop muted ></video>
        </div>
        
      </div>
    </div>
  );
};

export default BodyPage;

