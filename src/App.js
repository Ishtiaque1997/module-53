import logo from './logo.svg';
import './App.css';
import Grandfather from './Components/Grandfather/Grandfather';
import { useState } from 'react';

function App() {
  const [house,setHouse]=useState(1);
  const ornaments='diamond ring'; 
  return (
    <div className="App">
      <button onClick={()=>setHouse(house+1)}>Buy a new house</button>
     <Grandfather house={house}ornaments={ornaments}></Grandfather>
    </div>
  );
}

export default App;
