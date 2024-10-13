import React from 'react'
import Pp1 from './Pp1'
import P14Image from './P14.png'; // Renamed import to avoid conflict with component name
import pp1Image from './pp1.png'; // Renamed import to avoid conflict with component name
import pp2Image from './pp2.png'; // Renamed import to avoid conflict with component name
import pp3Image from './pp3.png'; // Renamed import to avoid conflict with component name



export default function P14() {

    const name ="Bhagya"
  return (
   <>
   <h1>Props drilling</h1>
   
   <Pp1 name={name}/>

   <br />
        <img src={P14Image} alt="P14" height="100%" width="100%" />
       
    <br />
        <img src={pp1Image} alt="pp1" height="100%" width="100%" />
    <br />
        <img src={pp2Image} alt="pp2" height="100%" width="100%" />
    <br />
        <img src={pp3Image} alt="pp3" height="100%" width="100%" />
   </>
  )
}
