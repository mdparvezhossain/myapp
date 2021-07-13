import React from 'react'
import './style.css';

const Button = () => {

    const doThis = () => {
        alert('Button Is Clicked');
    }    

    return (
        <div className="btn">
            <h1>Hello, I,m a Button</h1>
            <button onClick={doThis}>Plz Click Me</button>
        </div>
    )
}

export default Button;
