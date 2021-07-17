import React, { Component } from 'react';
import './style.css';

class Refresh extends Component {

    constructor() {
        super()
        this.forceHandler = this.forceHandler.bind(this);
    }
    
    forceHandler(){
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <h1>Force Update</h1>
               <button onClick={this.forceHandler}>Click Me</button>
               <h3>Random Number : {Math.random()} </h3>
            </div>
        )
    }
}
export default Refresh;
