import React from 'react';

const Aunt = (props) => {
 const {house}=props;
 return(
  <div>
   <p>This is aunt</p>
   <p>house: {house}</p>
  </div>
 );
};

export default Aunt;