import React, { Component } from 'react'
import {datataConsumer} from './Mycontext'

class Puti extends Component {
    render() {
        return (
            <div>
                <h1>
                    <datataConsumer>
                        {
                            msg=>{
                                return msg;
                            }
                        }
                    </datataConsumer>
                </h1>
            </div>
        )
    }
}
export default Puti;
