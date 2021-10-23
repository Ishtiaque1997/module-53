import React from 'react';

const Myself = (props) => {
 const {house}=props;
 return (
  <div>
   <h2>This is me</h2>
   <small>house:{house}</small>
  </div>
 );
};

export default Myself;