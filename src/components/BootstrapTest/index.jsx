import React, { Component } from 'react'

class Boots extends Component {

        constructor() {
            super()
        
            this.state = {
                 name:"Priya"
            }
        }

        change(love){
            this.setState({name:love})
        }
        

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.change.bind(this,"I Love You")}>Click Me</button>
            </div>
        )
    }
}
export default Boots;
