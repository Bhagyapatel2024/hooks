import React, { useState } from 'react';
import P1Image from './P1.png'; // Renamed import to avoid conflict with component name

export default function P1() {
    const [color, setColor] = useState('Red');

    const changeColor = () => {
        setColor('Blue');
    };

    return (
        <>
          <h1>UseState</h1>
            <h1>My favorite color is {color}</h1>
            <button onClick={changeColor}>Blue</button>
            <br />
            <img src={P1Image} alt="P1" height="100%" width="100%" />
            
        </>
    );
}
