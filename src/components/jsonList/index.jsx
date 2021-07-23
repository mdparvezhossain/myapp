import React, { Component } from 'react'

class JsonList extends Component {

    render() {
        const Relationship= [           
            {
                WF : 'Riya',
                HB : 'Roton'
            },
            {
                WF : 'Priya',
                HB : 'Parvez'
            },
            {
                WF : 'Afsana',
                HB : 'Pavel'
            }
        ]
        const statusWF = Relationship.map((dataWF)=>{
            return <option>{dataWF.WF}</option>
        });

        const statusHB = Relationship.map((dataHB)=>{
            return <option>{dataHB.HB}</option>
        });

        return (
            <div>
                <select>
                    {statusWF}
                </select>

                <select>
                    {statusHB}
                </select>
            </div>
        )
    }
}
export default JsonList;