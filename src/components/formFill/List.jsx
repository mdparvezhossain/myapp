import React, { Component } from 'react'

class List extends Component {

    render() {
        const Name = ['Parvez', 'Priya', 'Roton', 'Riya']
        const myName =  Name.map((dataChild)=>{
            return <li>{dataChild}</li>
        })

        return (
            <div>
                <ol>
                    {myName}
                </ol>
            </div>
        );
    }
}
export default List;
