// import logo from './logo.svg';
// import './App.css';
import React from 'react'; 
import Aheader from "./components/aheader";
import EmpBoxSearch from "./components/empBoxSearch";
import EmpReturnData from "./components/empReturnData"; 


function App() {
  return (
    // removed flexbox - to possibly incorporate after testing layout of table
    <div>
      <Aheader/>
      <EmpBoxSearch/>
      <EmpReturnData/>
    </div>
    )
  }  



export default App;


//     REMOVED DEFAULT FROM  create-react-app 
//     added components
//
//     Boiler plate code from create-react-app   
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }