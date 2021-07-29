import React, { Component } from 'react'
import { Redirect } from 'react-router';

class About extends Component {

    constructor({match}) {
        super()
    
        this.state = {
             myData: match.params.username
        }
    }
    

    render() {
        if(sessionStorage.getItem("userName")==null){
            return <Redirect to="/login"/>
        }
        else{
            return (
                <div>
                    <h1>{this.state.myData}</h1>
                </div>
            )
        }  
    }
}
export default About;
