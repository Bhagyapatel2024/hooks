import React ,{useEffect,useState,useRef}from 'react'
import P8Image from './P8.png'; // Renamed import to avoid conflict with component name
export default function P8() {
    const[value,setValue] = useState(0)
    const count = useRef(0);

    useEffect(()=>{
        count.current = count.current+1;
    })
  return (
       <>
        <button onClick={()=>{setValue(prev=>prev-1)}}>-1</button>
        <h1>{value}</h1>
        <button onClick={()=>{setValue(prev=>prev+1)}}>+1</button>
        <h1>Render Count :{count.current}</h1>
        <br />
        <img src={P8Image} alt="P8" height="100%" width="100%" />
       
       
       </>
  )
}
