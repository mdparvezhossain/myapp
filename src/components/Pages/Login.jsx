import React, { Component } from 'react'

class Login extends Component {

    Login=()=>{
        sessionStorage.setItem("userName","Parvez Dider")
    }
    Logout=()=>{
        sessionStorage.clear()
    }

    render() {
        return (
            <div>
                <button onClick={this.Login}>Log In</button>
                <button onClick={this.Logout}>Log Out</button>
            </div>
        )
    }
}
export default Login;
