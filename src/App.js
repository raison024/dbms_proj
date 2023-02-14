import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import "./App.css";

const QRscanner = () => {
  const [scanResults, setScanResults] = useState([]);
  const handleScan = (data) => {
    if (data) {
      setScanResults([...scanResults, data]);
    }
  }
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <span>QR Scanner</span>

      <center>
        <div style={{ marginTop: 30 , height: '500px', width: '200px'}}>
          <QrReader
            constraints={{ facingMode: 'environment' }}
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ height: 240, width: 320 }}
          />
        </div>
      </center>

      <div
        style={{ fontSize: 18, width: 320, height: 100, marginTop: 100, backgroundColor: 'blue' }}
        value={data}
      />
    </div>
  );
};

export default QRscanner;


// const App = (props) => {
//   const [data, setData] = useState('No Result');

//   return (
//     <div className="App-header">
//       <h3>Virtual Cart</h3>
//     <div style={{width: '200px'}}>
//       <QrReader
//         constraints={{ facingMode: 'environment' }}
//         onResult={(result, error) => {
//           if (!!result) {
//             setData(result?.text);
//             // setData([...data, result]);
//           }

//           if (!!error) {
//             console.info(error);
//           }
//         }}
//         style={{ width: '50%' }}
//       />
//       <p>{data}</p>

//     </div>
//     </div>
//   );
// };

// export default App;

// export default function App() {
//   const [result, setResult] = useState("No result");
//   let handleScan = data => {
//     if (data) {
//       const joel = 'rae'
//       // setResult(data);
//       console.log(data);
//       // if(data===joel) {
//       //   console.log('this is joel');
//       // }
//       // else {
//       //   console.log('this is raison')
//       // }
//     }
//   };

//   let handleError = err => {
//     // alert(err);
//   };
//   return (
//     <div className="App-header">
//       <h1>Store</h1>
//       <div style={{height: '300px', width: '300px'}}>
//         <QrReader
//           delay={100}
//           onError={handleError}
//           // onScan={handleScan}
//           style={{ width: "50%" }}
//           // facingMode="environment"
//           onResult={ handleScan }
//           constraints={ {facingMode: 'environment'} }
//         />
//       <p>{result}</p>
//       </div>
//     </div>
//   );
// }
