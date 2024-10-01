import React, { useState } from 'react';
import P3Image from './P3.png'; // Renamed import to avoid conflict with component name

export default function P3() {
   const [count,setCount]= useState(0);
   const increaseCount = ()=>{
    setCount(prev=>prev+1)
    setCount(prev=>prev+1)
    setCount(prev=>prev+1)
    setCount(prev=>prev+1)
   }

    

    return (
        <>
            <h1>Count : {count}</h1>
            <button onClick={increaseCount}>increase by 4</button>
            <br />
            <img src={P3Image} alt="P3" height="100%" width="100%" />
        </>
    );
}