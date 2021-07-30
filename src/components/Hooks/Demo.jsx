import React from 'react'
import {useState} from 'react';

const Demo = () => {

    const [name, setName] = useState({
        Capital: "Dhaka To"
    })
    const clickHandler=()=>{
        setName({Capital:"Chuadanga"})
    }

    return (
        <div>
            <h1>{name.Capital}</h1>
            <button onClick={clickHandler}>Change</button>
        </div>
    )
}

export default Demo
