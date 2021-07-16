import React, { Component } from 'react'

class Index2 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             login: false
        }
    }

    render() {
        return (
            this.state.login? <h1>Welcome</h1> : <h1>Sorry</h1>
        )
    }
}
export default Index2;
