import logo from './logo.svg';
import './App.css';
import Grandfather from './Components/Grandfather/Grandfather';
import { createContext, useState } from 'react';

export const RingContext=createContext('ring')
function App() {
  const [house,setHouse]=useState(1);
  const ornaments='diamondopopo ring'; 
  return (
  <RingContext.Provider value={ornaments}>
      <div className="App">
      <button onClick={()=>setHouse(house+1)}>Buy a new house</button>
     <Grandfather house={house}></Grandfather>
    </div>
  </RingContext.Provider>
  );
}

export default App;
