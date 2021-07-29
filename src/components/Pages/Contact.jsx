import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Contact extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             passData: 'ParvezHossain'
        }
    }
    

    render() {
        const paramiters = "/about/"+ this.state.passData;
        return (
            <div>
                <h1>This is Contact Page <br></br> I want to Passing my data Contact Page to About Page</h1>
                <button><Link to={paramiters}>Click Me</Link></button>
            </div>
        )
    }
}
export default Contact;
