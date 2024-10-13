import React, { useState,useEffect } from 'react'
import P5Image from './P5.png'; // Renamed import to avoid conflict with component name
export default function P5() {

   const [count,setCount]=useState(0)
   useEffect(()=>{
    setTimeout(()=>{
        setCount(count => count+1);
    },2000)
   },[count])



  return (
   <>
   
     <h1>I've rendered {count} times !</h1>
     <br />
     <img src={P5Image} alt="P5" height="100%" width="100%" />
   </>
  )
}
