import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './style.css';

class Form extends Component {
    
    constructor() {
        super()
    
        this.state = {
            fName: " ",
            lName: " ",
            mobile: " ",
            email: " ",
            password: " "

        }
    }  

    onChangeHandler=(e)=>{
       const inputName = e.target.name;
       const inputValue = e.target.value;
       this.setState({[inputName]:inputValue});

       if(inputName==="fName"){
           const namePattern=/^([a-zA-Z]){2,30}$/;
           if(!namePattern.test(inputValue)){
               this.setState({fName:"First Name Is Not Valid"})
           }
       }

       if(inputName==="fName"){
           const namePattern=/^([a-zA-Z]){2,30}$/;
           if(!namePattern.test(inputValue)){
               this.setState({fName:"First Name Is Not Valid"})
           }
       }

       if(inputName==="mobile"){
           if(!Number(inputValue)){
               this.setState({mobile:"Number Is Not Valid"})
           }
       }

       if(inputName==="email"){
           const emailPattern=/\s+@\s+\ \s+/;
           if(!emailPattern.test(inputValue)){
               this.setState({email:"Email Is Not Valid"})
           }
       }

       if(inputName==="password"){
           const passwordPattern=/\s+@\s+\. \s+/;
           if(!passwordPattern.test(inputValue)){
               this.setState({email:"Email Is Not Valid"})
           }
       }

    }

    render() {
        return (
            <div id="signup">
                    <p>Please fill up this form </p>                   
                    <p>First Name : {this.state.fName}</p>
                    <p>Last Name : {this.state.lName}</p>
                    <p>Mobile : {this.state.mobile}</p>
                    <p>Email : {this.state.email}</p>
                    <p>Password : {this.state.password}</p>
                <form id="formID">     
                    <input name="fName" onChange={this.onChangeHandler} type="text" placeholder="First Name"/> <br/>
                    <input name="lName" onChange={this.onChangeHandler} type="text" placeholder="Last Name"/> <br/>
                    <input name="mobile" onChange={this.onChangeHandler} type="text" placeholder="Phone Number"/> <br/>
                    <input name="email" onChange={this.onChangeHandler} type="email" placeholder="Email"/> <br/>
                    <input name="password" onChange={this.onChangeHandler} type="password" placeholder="Password"/> <br/>
                    <input type="submit" value="Submit Now"/>
                </form>
            </div>
        )
    }
}
export default Form;