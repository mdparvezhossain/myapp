import React, { Component } from 'react'
import './style.css';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import axios from 'axios';

class Table extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             tableInfor: []
        }
    }

    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(response=>{
            this.setState({tableInfor:response.data})
        })
        .catch(error=>{
            alert("Something was Wrong")
        })
    }

    render() {
        const tableData= this.state.tableInfor
        const col=[
            {Header:"Country Name", accessor:"name"},
            {Header:"Capital", accessor:"capital"},
            {Header:"Population", accessor:"population"}
        ]

        return (
            <div>
                <ReactTable 
                    data={tableData}
                    columns={col}
                    defaultPageSize={12}
                    pageSizeOptions={[15,20,30,45,60]}
                />
            </div>
        )
    }
}
export default Table;
