'use client';

import React, { useState, useRef } from "react";
import Webcam from "react-webcam";

function App() {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  return (
    <div className="App">
      <h1>React Webcam Example</h1>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture}>Capture Photo</button>
      {capturedImage && <img src={capturedImage} alt="Captured" />}
    </div>
  );
}

export default App;



// import React, { useState } from "react";
// import Webcam from "react-webcam";
// import Modal from '@mui/material/Modal';
// import Button from '@mui/material/Button';

// export default function Home() {
//   const [openModal, setOpenModal] = useState(false);
//   const [cameraFacingMode, setCameraFacingMode] = useState("user"); 

//   const handleOpenModal = () => {
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//   };

//   const handleCameraToggle = () => {
//     setCameraFacingMode(prevMode => prevMode === "user" ? "environment" : "user"); 
//     };

//   return (
//     <>
//       <div>
//         <h1>Webcam Capture</h1>
//         <Button variant="outlined" onClick={handleOpenModal}>
//           Take a Photo
//         </Button>
//       </div>
//       <Modal
//         open={openModal}
//         onClose={handleCloseModal}
//         aria-labelledby="modal-title"
//         aria-describedby="modal-description"
//       >
//         <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
//           <h2 id="modal-title">Webcam Capture</h2>
//           <Webcam
//             audio={false}
//             screenshotFormat="image/jpeg"
//             style={{ width: "100%", maxWidth: "500px", height: "auto" }}
//             videoConstraints={{ facingMode: cameraFacingMode }}
//           />
//           <Button variant="contained" onClick={handleCloseModal} style={{ marginTop: '20px' }}>
//             Close
//           </Button>
//           <Button variant="contained" onClick={handleCameraToggle} style={{ marginTop: '20px' }}>
//             {cameraFacingMode === "user" ? "Switch to Back Camera" : "Switch to Front Camera"}
//           </Button>
//         </div>
//       </Modal>
//     </>
//   );
// }
