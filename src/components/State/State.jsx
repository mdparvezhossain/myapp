import React, {useState} from 'react';
import './State.style.css';

const State = () => {
    const [count, setCount] = useState(0);

    const increment = (e) => {
        setCount (count => count + 1)
    };
 
    const decrement = (e) => {
        if(count <= 0)return;
        setCount (count => count - 1)
    };
    return (
        <div className='State'>
            <button className="button" onClick={increment}>Parvez</button>
            <h2>{count}</h2>
            <button className="button" onClick={decrement}>Priya</button>
            
        </div>
    )
};

export default State;