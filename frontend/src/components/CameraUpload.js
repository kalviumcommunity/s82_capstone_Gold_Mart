import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

const CameraUpload = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');

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

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/products/upload', {
        name,
        price,
        image
      });
      setMessage('Product uploaded successfully!');
    } catch (error) {
      console.error('Upload failed', error);
      setMessage('Failed to upload product');
    }
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

          <div style={{ marginTop: '15px' }}>
            <input
              type="text"
              placeholder="Jewelry Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ marginRight: '10px' }}
            />
            <input
              type="text"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <button
              onClick={handleSubmit}
              style={{ marginTop: '10px', padding: '10px', backgroundColor: '#1A3F22', color: 'white', border: 'none' }}
            >
              Upload Product
            </button>

            <div style={{ marginTop: '10px' }}>
              <button
                onClick={() => alert('Redirecting to Google Pay...')}
                style={{ padding: '10px', backgroundColor: '#58761B', color: 'white', border: 'none' }}
              >
                Pay with GPay
              </button>
            </div>
          </div>
          {message && <p style={{ marginTop: '10px' }}>{message}</p>}
        </div>
      )}
    </div>
  );
};

export default CameraUpload;
