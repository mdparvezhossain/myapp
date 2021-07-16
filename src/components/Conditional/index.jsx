import React, { Component } from 'react'

class Index1 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             login: true
        }
    }
    

    render() {
        if(this.state.login==true){
            return( <button>Welcome to our website</button> )
        }
        else{
            return( <button>Plz Sign In</button> )
        }
       
    }
}
export default Index1;
