import React ,{useEffect,useState,useRef, useMemo}from 'react'
import P10Image from './P10.png'; // Renamed import to avoid conflict with component name

export default function P10() {
  
 const[number,setNumber]=useState(0)
 const[counter,SetCounter]=useState(0)

 function cubeNum(num){
    return Math.pow(num,3)
 }

const result = useMemo(()=>cubeNum(number),[number]);
  return (
       <>
      <input type="number" value="number" onChange={(e)=>{setNumber(e.target.value)}}/>
     <h1> Cube of the number : {result}</h1>
     <button onClick={()=>{SetCounter(counter+1)}}>counter++</button>
     <h1>Counter : {counter}</h1>
      <br />
        <img src={P10Image} alt="P10" height="100%" width="100%" />
       
       
       </>
  )
}
