import React, { Component } from 'react';
import './style.css';

class Selecte extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             Divi1:"Dhaka",
             Divi2:"Barishal",
             Divi3:"Khulna",
             Divi4:"Rajshahi",
             Divi5:"Shylet",
             Divi6:"Rangpur",
             Divi7:"Chattograme",
             show:"",
             auto: ''
        }
    }

    onChangeHandler=(event)=>{
        const valu = event.target.value
        this.setState({show:valu, auto:valu})
    }
    

    render() {
        return (
            <div>
                <p>{this.state.show}</p>
                <select onChange={this.onChangeHandler} value={this.state.auto}>
                    <option>{this.state.Divi1}</option>
                    <option>{this.state.Divi2}</option>
                    <option>{this.state.Divi3}</option>
                    <option>{this.state.Divi4}</option>
                    <option>{this.state.Divi5}</option>
                    <option>{this.state.Divi6}</option>
                    <option>{this.state.Divi7}</option>
                </select>
            </div>
        )
    }
}
export default Selecte;
