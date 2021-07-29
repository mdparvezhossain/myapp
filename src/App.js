import React  from 'react';
import RouteCom from './components/Route';
import Navigation from './components/Navigaton';
import { BrowserRouter, Route } from 'react-router-dom';



const App = () => {

    return (
        <div>
           <BrowserRouter>
            <Navigation />
            <RouteCom />
           </BrowserRouter>
        </div>
    )
};
export default App;

