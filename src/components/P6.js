import React, { useState,useEffect } from 'react'
import P6Image from './P6.png'; // Renamed import to avoid conflict with component name
export default function P6() {

   const [count,setCount]=useState(0)
   useEffect(()=>{
    setTimeout(()=>{
        setCount(count => count+1);
    },2000)
   },[])



  return (
   <>
   
     <h1>I've rendered {count} times !</h1>
     <br />
     <img src={P6Image} alt="P6" height="100%" width="100%" />
   </>
  )
}
