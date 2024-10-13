import React from 'react'

import P15Image from './P15.png'; // Renamed import to avoid conflict with component name
import pp4Image from './pp4.png'; // Renamed import to avoid conflict with component name
import pp5Image from './pp5.png'; // Renamed import to avoid conflict with component name
import pp6Image from './pp6.png'; // Renamed import to avoid conflict with component name
import pp7Image from './pp7.png'; // Renamed import to avoid conflict with component name
import pp8Image from './pp8.png'; // Renamed import to avoid conflict with component name
export default function P15() {

    
  return (
   <>
   <h1>React-router (npm i react-router-dom)</h1>
   <br />
        <img src={pp8Image} alt="P14" height="100%" width="100%" />
       
    <br />

   <h1>Link (here we redirect another component to change manualy google url)</h1>
   
   

   <br />
        <img src={P15Image} alt="P14" height="100%" width="100%" />
       
    <br />
    <h1>Link (here we redirect another component without change manualy google url)</h1>
    <br />
        <img src={pp4Image} alt="P14" height="100%" width="100%" />
       
    <br />
    <h1>using navigate which is better (here we redirect another component to click button)</h1>
    <br />
        <img src={pp5Image} alt="P14" height="100%" width="100%" />
       
    <br />
    <h1>here navigate + data fetch  (here we redirect another component to click button)</h1>
    <br />
        <img src={pp6Image} alt="P14" height="100%" width="100%" />
       
    <br />
    <br />
        <img src={pp7Image} alt="P14" height="100%" width="100%" />
       
    <br />

  
   </>
  )
}
