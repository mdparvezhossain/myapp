import React, { Component } from 'react'

class List extends Component {

    data=(dataChild)=>{
        return <li>{dataChild}</li>
    }

    render() {
        const Name = ['Parvez', 'Priya', 'Roton', 'Riya', 'Pavel', 'Afsana']
        const myName =  Name.map(this.data)

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
