import React, { Component } from 'react'
import { Redirect } from 'react-router';

class Home extends Component {
    render() {

        if(sessionStorage.getItem("userName")==null){
            return <Redirect to="/login"/>
        }
        else{
            return (
                <div>
                    <h1>This is a Our Home Page</h1>
                </div>
            )
        }
    }
}
export default Home;
