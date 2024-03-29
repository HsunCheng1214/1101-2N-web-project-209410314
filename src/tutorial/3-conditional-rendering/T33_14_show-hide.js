import React, { useState, useEffect } from 'react';

const T33_14_ShowHide = () => {
  const[show, setShow] = useState(false);


  return <>
    <button className='btn' onClick={ ()=> setShow(!show)}>show/hide</button>

    {show && <Item />}

  </>;
};

const Item =()=> {

  const [size, setSize] = useState(window.innerWidth);
  const checkSize =()=>{
    setSize(window.innerWidth);
  }

  useEffect(()=>{
    window.addEventListener('resize', checkSize);
    return()=>{
      window.removeEventListener('resize',checkSize);
    }
  }, []);

  return(
    <div>
      <h1>Window</h1>
      <h2>size: {size}</h2>
    </div>
  )
}

export default T33_14_ShowHide;
