import React, { useState } from 'react';
import P4Image from './P4.png'; // Renamed import to avoid conflict with component name

export default function P4() {
   const [count,setCount]= useState(0);
   const increaseCount = ()=>{
    setCount(count=>count+1)
    setCount(count=>count+1)
    setCount(count=>count+1)
    setCount(count=>count+1)
   }

    

    return (
        <>
            <h1>Count : {count}</h1>
            <button onClick={increaseCount}>increase by 4</button>
            <br />
            <img src={P4Image} alt="P4" height="100%" width="100%" />
        </>
    );
}