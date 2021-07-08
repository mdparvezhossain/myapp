import React, { Component } from 'react'

class EVENT_HANDLER extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             changedValue : ''
        }
    }
    
   
    onChange = (e) =>{
        this.setState({
            changedValue : e.target.value
        }, ()=> {
            console.log(this.state.changedValue);
        })
    }

    render() {

        return (
            <div>
                <input type="text" onChange={this.onChange} placeholder="please type here"/>
                <p>{this.state.changedValue}</p>
            </div>
        )
    }
}
export default EVENT_HANDLER;
