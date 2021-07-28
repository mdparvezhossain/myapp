import React, { Component } from 'react'
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import axios from 'axios';

class Table extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             inputData:[]
        }
    }
    
    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(response=>{
            this.setState({inputData:response.data})
        })
        .catch(error=>{
            alert("Something was wrong")
        })
    }

    render() {
        const tableData = this.state.inputData
        const colHeader = [
            {Header: "Country Name", accessor: "name"},
            {Header: "Capital", accessor: "capital"},
            {Header: "Populations", accessor: "population"}
        ]

        return (
            <div>
                <ReactTable
                    data={tableData}
                    columns={colHeader}
                    defaultPageSize={12}
                    pageSizeOptions={[10,20,30,40,50]}
                />
            </div>
        )
    }
}
export default Table;