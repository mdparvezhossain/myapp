import React, { Component } from 'react'
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import axios from 'axios';

class Table extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             importData:[]
        }
    }
    

    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(response=>{
            this.setState({importData:response.data})
        })
        .catch(error=>{
            alert("Something was Wrong")
        })
    }
    render() {
        const data= this.state.importData
        const colHeader= [
            {Header: "Country Name", accessor: "name"},
            {Header: "Capital", accessor: "capital"},
            {Header: "Population", accessor: "population"}
        ]
        return (
            <div>
                <ReactTable
                    data={data}
                    columns={colHeader}
                    defaultPageSize={12}
                    pageSizeOptions={[15,20,35,50]}
                />
            </div>
        )
    }
}
export default Table;