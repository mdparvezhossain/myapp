import React, { Component } from 'react'

class About extends Component {

    constructor({match}) {
        super()
    
        this.state = {
             myData: match.params.username
        }
    }
    

    render() {
        return (
            <div>
                <h1>{this.state.myData}</h1>
            </div>
        )
    }
}
export default About;
