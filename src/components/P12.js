import React,{useState} from 'react'
import useCounter from './useCounter'

import P12Image from './P12.png'; // Renamed import to avoid conflict with component name
import useCounterImage from './useCounter.png'; // Renamed import to avoid conflict with component name

export default function P12() {
const[count,Increment,Decrement]=useCounter()

  return (
    <>
    <h1>Custom Hook</h1>
    <div>{count}</div>
    <button onClick={Increment}>Increment</button>
    <button onClick={Decrement}>Decrement</button>
    <br />
        <img src={P12Image} alt="P12" height="100%" width="100%" />
       
    <br />
        <img src={useCounterImage} alt="useCounter" height="100%" width="100%" />
       
    </>
  )
}