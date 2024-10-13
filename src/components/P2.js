import React, { useState } from 'react';
import P2Image from './P2.png'; // Renamed import to avoid conflict with component name

export default function P2() {
   const[car,setCar]=useState({
    brand:'Ferrari',
    year:'2023',
    color:"red"
   })
    

    const changeColor = () => {
        setCar((prev)=>{
            return {...prev,color:"blue"}
        });
    };

    return (
        <>
            <h1>My {car.brand}</h1>
            <h2>It is a {car.color} from {car.year}</h2>
            <button onClick={changeColor}>Blue</button>
            <br />
            <img src={P2Image} alt="P2" height="100%" width="100%" />
        </>
    );
}
