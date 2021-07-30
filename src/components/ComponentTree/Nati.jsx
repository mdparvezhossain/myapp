import React, { Component } from 'react'
import Puti from './Puti'

class Nati extends Component {
    render() {
        return (
            <div>
                <Puti nati={this.props.sele}/>
            </div>
        )
    }
}
export default Nati;
