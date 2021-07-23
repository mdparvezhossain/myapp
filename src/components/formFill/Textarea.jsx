import React, { Component } from 'react'

class Textarea extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             text: " "
        }
    }

    handler=(event)=>{
        var myText = event.target.value
        this.setState({text:myText})
    }
    

    render() {
        return (
            <div>
                <textarea onChange={this.handler} placeholder="Write Your Text" cols="30" rows="10"></textarea>
                <p>{this.state.text}</p>
            </div>
        )
    }
}
export default Textarea;
