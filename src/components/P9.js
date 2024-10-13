import React ,{useEffect,useState,useRef}from 'react'
import P9Image from './P9.png'; // Renamed import to avoid conflict with component name
export default function P9() {
   const inputElem = useRef();

   const btnClicked = ()=>{
    inputElem.current.style.background = "blue";
   }





  return (
       <>
      <input type="text" ref={inputElem}/>
      <button onClick={btnClicked}>Click Here</button>
      <br />
        <img src={P9Image} alt="P9" height="100%" width="100%" />
       
       
       </>
  )
}
