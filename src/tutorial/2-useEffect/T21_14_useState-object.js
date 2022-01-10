import React, { useState, useEffect } from 'react';


const T21_14_UseStateObject = () => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(999999999999999);

  useEffect( ()=>{

    console.log('call effect' +value);
    if(value > 0){
      document.title=`New Message(${value})`
    }
     if (value2 > 999999999999999) {
       document.title = `New Message2(${value2})`;
     }
  }, [value]);


  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>Value +1</button>
      <h1>{value2}</h1>
      <button className="btn" onClick={() => setValue2(value2+ 1)}>
        Value2 +1
      </button>
    </>
  );
};

export default T21_14_UseStateObject;
