import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Pages/Header';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Footer from './Pages/Footer';
import Login from './Pages/Login';

class RouteCom extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/header" component={Header} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/about/:username" component={About} />
                    <Route exact path="/footer" component={Footer} />
                </Switch>
            </div>
        )
    }
}
export default RouteCom;
