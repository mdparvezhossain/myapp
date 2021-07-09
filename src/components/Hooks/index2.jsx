import React, {useState} from 'react'

const Hooks2 = () => {

    const [count, setCount] = useState(0)
    const handleDecrement = () =>{
        setCount(count - 1);
    }

    return (
        <div>
            <h1>Count : {count} </h1>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default Hooks2;
