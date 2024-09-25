// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// Import the function(s) needed.  Note that ./ = the same folder
//import Message from './Message';
import { useState } from "react";
import Alert from "./components/Alert";
// import ListGroup from "./components/ListGroup";

import Buttons from "./components/Buttons";

function App() {
  //return <div><Message /></div>;
  // these props are adding in for the change we made to ListGroup
  // const items = ["New York", "San Francisco", "Tokyo", "Lodon", "Paris"];

  // const handleSelectItem = (item: string) => {
  // console.log(item);
  // };
  const [alertVisible, setAlertVisibility] = useState(false);

  const bName = "Count Chocula";

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Alert>
        Unicorns are <span>awesome!</span>
      </Alert> */}
      {
        <Buttons
          onClick={() => setAlertVisibility(true)}
          children={bName}
          color="success"
        ></Buttons>
      }
    </div>
  );
}

export default App;
