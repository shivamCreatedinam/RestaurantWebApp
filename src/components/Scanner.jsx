import React, { useState, useRef, useCallback } from 'react';
import QrScanner from 'qr-scanner';
import QrReader from 'reactjs-qr-reader';

export const Scanner = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [useCamera, setUseCamera] = useState(false);
  const fileRef = useRef();

  const handleChange = async (e) => {
    const file = e.target.files[0];
    setFile(file);
    try {
      const result = await QrScanner.scanImage(file);
      console.log(result);
      setData(result);
    } catch (error) {
      console.error('Error scanning QR code:', error);
      setData('Failed to scan QR code');
    }
  };

  const handleScan = useCallback((result) => {
    if (result) {
      console.log('QR Reader Result:', result);
      setData(result.data);
    }
  }, []);

  const handleError = (error) => {
    console.error('QR Reader Error:', error);
  };

  return (
    <div className="container">
      <div className="col-md-6 mx-auto">
        <h2 className="text-center mb-4">React QR Code Scanner</h2>
        <div className="card border-0">
          <div className="card-body d-flex flex-column justify-content-center align-items-center">
            <input
              ref={fileRef}
              onChange={handleChange}
              type="file"
              accept=".png, .jpg, .jpeg"
              style={{ display: 'none' }}
            />
            <button
              type="button"
              onClick={() => fileRef.current.click()}
              className="btn btn-primary"
            >
              Scan QR code from file
            </button>
            <button
              type="button"
              onClick={() => setUseCamera(!useCamera)}
              className="btn btn-secondary mt-3"
            >
              {useCamera ? 'Stop Camera' : 'Scan QR code with Camera'}
            </button>
            {useCamera && (
              <div style={{ width: '300px', height: 'auto' }}>
                <QrReader
                  delay={300}
                  onError={handleError}
                  onScan={handleScan}
                  style={{ width: '100%' }}
                />
              </div>
            )}
            <div className="mt-4 d-flex flex-column justify-content-center" style={{ width: '400px' }}>
              {file && <img src={URL.createObjectURL(file)} alt="QR Code" style={{ width: '100%' }} />}
            </div>
            <div className="mt-4">
              {data && <p>Scanned Data: {data}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

