import React, { Component } from 'react'
import axios from 'axios';

class GetList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             mydata: []
        }
    }

    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(response=>{
            this.setState({mydata:response.data})
        })
        .catch(error=>{
            console.log(error);
        })
    }

    render() {

        const myList = this.state.mydata
        const Country = myList.map((data)=>{
                    return <option>{data.name}</option>
                })

        return (
            <div>
                <select>
                    {Country}
                </select>
            </div>
        )
    }
}
export default GetList;
