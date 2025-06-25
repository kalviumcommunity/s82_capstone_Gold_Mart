import React, { useRef, useState, useEffect } from 'react';

const CameraUpload = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        })
        .catch((err) => console.error('Camera access denied', err));
    }
  }, []);

  const capturePhoto = () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, 320, 240);
    const dataURL = canvasRef.current.toDataURL('image/png');
    setImage(dataURL);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Upload Jewelry via Camera</h2>
      <video ref={videoRef} width="320" height="240" style={{ border: '2px solid #D99201' }} />
      <br />
      <button onClick={capturePhoto} style={{ marginTop: '10px', padding: '10px', backgroundColor: '#D99201', color: 'white', border: 'none' }}>Capture</button>
      <br />
      <canvas ref={canvasRef} width="320" height="240" style={{ display: 'none' }} />
      {image && (
        <div>
          <h4>Preview:</h4>
          <img src={image} alt="Captured" style={{ border: '1px solid #ccc', marginTop: '10px' }} />
        </div>
      )}
    </div>
  );
};

export default CameraUpload;
