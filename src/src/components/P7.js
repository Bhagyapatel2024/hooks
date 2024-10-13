import React, {useState, useEffect } from 'react'
import P7Image from './P7.png'; // Renamed import to avoid conflict with component name
export default function P7() {

   const [count,setCount]=useState(0)
   useEffect(()=>{
    setTimeout(()=>{
        setCount(count => count+1);
    },2000)
   })



  return (
   <>
   
     <h1>I've rendered {count} times !</h1>
     <br />
     <img src={P7Image} alt="P7" height="100%" width="100%" />
   </>
  )
}
