import React  from 'react';
import './App.css'
import Sele from './components/ComponentTree/Sele';
import {dataProvider} from './components/ComponentTree/Mycontext';




const App = () => {

    return (
        <div className="App">
            <dataProvider value="Hello Nati How R U ???">
                <Sele />
            </dataProvider>          
        </div>
    )
};
export default App;

