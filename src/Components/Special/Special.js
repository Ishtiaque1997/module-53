import React from 'react';

const Special = (props) => {
 const {ornaments}=props;
 return (
  <div>
   <h2>Special</h2>
   <p>Things:{ornaments}</p>
  </div>
 );
};

export default Special;