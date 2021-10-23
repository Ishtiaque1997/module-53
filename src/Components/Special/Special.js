import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Special = () => {
 
 const value=useContext(RingContext);
 console.log(value)

 return (
  <div>
   <h2>Special</h2>
   <p>Things:{value}</p>
  </div>
 );
};

export default Special;