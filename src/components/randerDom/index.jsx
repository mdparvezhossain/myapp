import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './style.css';

class Dom extends Component {


    event(){
        const container = document.getElementById("domID");
        const element = <h3>hi Priya</h3>
        const callback = function(){
            alert("We are Happy");
        }

        ReactDOM.render(element,container,callback);
    }

    render() {
        return (
            <div>
                <button onClick={this.event}>Click Me</button>
                <h1 id="domID">Hello Parvez</h1>
            </div>
        )
    }
}
export default Dom;
