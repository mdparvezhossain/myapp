import React, { Component } from 'react'
import './style.css';
import axios from 'axios';

class Post extends Component {
    constructor() {
        super()
    
        this.state = {
             postData: "",
             postResult: " "
        }
    }
    changeHandler=(e)=>{
        const myValue = e.target.value
        this.setState({postData:myValue})
    }

    clickHandler=()=>{
        axios.post('http://ss.rabbil.com/test.php', this.state.postData)
        .then(response=>{
            this.setState({postResult:response.data})
        })
        .catch(error=>{
            console.log(error);
        })
    }


    render() {
        return (
          <div className="Post-style">
              <p>{this.state.postResult}</p>
            <input onChange={this.changeHandler} type="text"/>
            <button onClick={this.clickHandler}>Send</button>
            
          </div>
        )
    }
}
export default Post;
