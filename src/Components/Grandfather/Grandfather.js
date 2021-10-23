import React from 'react';
import Aunt from '../Aunt/Aunt';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

const Grandfather = (props) => {
 const {house,ornaments}=props;
 return (
  <div>
   <h4>This is grandpa</h4>
   <p>house: {house}</p>
   <div style={{display:'flex'}}>
    <Father house={house} ornaments={ornaments}></Father>
   <Uncle house={house}></Uncle>
   <Aunt house={house}></Aunt>
   </div>
  </div>
 );
};

export default Grandfather;