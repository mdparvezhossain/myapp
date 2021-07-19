import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Image extends Component {

    changeIgm(){
        var imgMo = document.getElementById("myImg");
        ReactDOM.findDOMNode(imgMo).src="https://rabbil.com/controlPanel/Images/fruit%20app.png"
    }

    render() {
        return (
            <div>
                <button onClick={this.changeIgm}>Change Img</button>
                <img id="myImg" src="https://rabbil.com/controlPanel/Images/mobilepondit.png"> </img>
            </div>
        )
    }
}
export default Image;


