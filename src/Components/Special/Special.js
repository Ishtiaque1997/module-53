import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Special = () => {
 
 const [value,house]=useContext(RingContext);
 console.log(value)

 return (
  <div>
   <h2>Special</h2>
   <p>Things:{value}</p>
   <p>house: {house}</p>
  </div>
 );
};

export default Special;