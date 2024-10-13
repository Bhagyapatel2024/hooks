import React from 'react'
import Pro from './Pro';
import P13Image from './P13.png'; // Renamed import to avoid conflict with component name
import ProImage from './pro.png'; // Renamed import to avoid conflict with component name

export default function P13() {
  return (
  <>
  <h1>Props</h1>
    <Pro name="Bhagya"/>

    <br />
        <img src={P13Image} alt="P13" height="100%" width="100%" />
       
    <br />
        <img src={ProImage} alt="pro" height="100%" width="100%" />
    </>
    
  );
}
