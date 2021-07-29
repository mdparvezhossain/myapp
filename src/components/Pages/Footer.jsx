import React, { Component } from 'react'
import { Redirect } from 'react-router';

class Footer extends Component {
    render() {
        if(sessionStorage.getItem("userName")==null){
            return <Redirect to="/login"/>
        }
        else{
            return (
                <div>
                    <h1>This is Footer</h1>
                </div>
            )
        }
    }
}
export default Footer;




