import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Pages/Header';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Footer from './Pages/Footer';
import Notfound from './Pages/Notfound';

class RouteCom extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" Component={Home} />
                    <Route exact path="/header" Component={Header} />
                    <Route exact path="/contact" Component={Contact} />
                    <Route exact path="/about/:username" Component={About} />
                    <Route exact path="/footer" Component={Footer} />
                    <Route Component={Notfound} />
                </Switch>
            </div>
        )
    }
}
export default RouteCom;
