import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import "./App.css";

export default function App() {
  const [result, setResult] = useState("No result");
  let handleScan = data => {
    if (data) {
      setResult(data);
    }
  };

  let handleError = err => {
    // alert(err);
  };
  return (
    <div className="App-header">
      <h1>Store</h1>
      <div style={{height: '300px', width: '300px'}}>
        <QrReader
          delay={300}
          onError={handleError}
          // onScan={handleScan}
          style={{ width: "50%" }}
          // facingMode="environment"
          onResult={ handleScan }
          constraints={ {facingMode: 'environment'} }
        />
      <p>{result}</p>
      </div>
    </div>
  );
}
