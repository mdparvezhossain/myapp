import React, { Component } from 'react'
import Nati from './Nati'

class Sele extends Component {
    render() {
        return (
            <div>
                <Nati sele={this.props.dada}/>
            </div>
        )
    }
}
export default Sele;
