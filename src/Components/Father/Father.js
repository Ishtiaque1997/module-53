import React, { useContext } from 'react';
import { RingContext } from '../../App';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = (props) => {
 const {house}=props;
 const retro=useContext(RingContext);
 return (
  <div>
   <h2>This is father</h2>
   {retro}
   <p>house:{house}</p>
   <div style={{display:'flex'}}>
    <Brother house={house}></Brother>
    <Myself house={house}></Myself>
    <Sister house={house}></Sister>
   </div>
  </div>
 );
};

export default Father;