import React from 'react'

function Props(props) {
    console.log(props);
    return (
        <div>
            <h1>{props.name} </h1>
            <h3>{props.status} </h3>
            <h2>{props.age}</h2>
        </div>
    )
}

export default Props;
