import React from 'react';
import Special from '../Special/Special';

const Myself = (props) => {
 const {house,ornaments}=props;
 return (
  <div>
   <h2>This is me</h2>
   <small>house:{house}</small>
   <Special ornaments={ornaments}></Special>
  </div>
 );
};

export default Myself;