import React, { Component } from 'react'
import './style.css';
import axios from 'axios';

class Postdata extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             postData: "",
             sendResult: ""
        }
    }
    

    changeHandler=(e)=>{
       const catchValue = e.target.value
       this.setState({postData:catchValue})
    }
    clickHandler=()=>{
        axios.post(" ",this.state.postData)
        .then(response=>{
            this.setState({sendResult:response.data})
        })
        .catch(error=>{
            console.log(error);
        })
    }
    render() {
        const vewData = this.state.sendResult
        return (
            <div className="Post">
                <input onChange={this.changeHandler} type="text"/>
                <button onClick={this.clickHandler}>Send</button>
                <h1>{vewData}</h1>
            </div>
        )
    }
}
export default Postdata;
