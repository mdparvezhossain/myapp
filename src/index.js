import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import About from './Pages/About';
// import Contact from './Pages/Contact';
// import Header from './Pages/Header';
// import Footer from './Pages/Footer';
// import Portfolio from './Pages/Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Route, Link, BrowserRouter as Router } from '../node_modules/react-router-dom';

// const myPages=(
//     <Router>
//         <div id="pages-style">
//            <nav>
//               <ul>
//                <Link className="link-tag" to="/">Home</Link>
//                <Link className="link-tag" to="/header">Header</Link>
//                <Link className="link-tag" to="/portfolio">Portfolio</Link>
//                <Link className="link-tag" to="/contact">Contact</Link>
//                <Link className="link-tag" to="/about">About</Link>
//                <Link className="link-tag" to="/footer">Footer</Link>
//               </ul>
//            </nav>

//             <Route exact path="/" component={App} />
//             <Route path="/header" component={Header} />
//             <Route path="/portfolio" component={Portfolio} />
//             <Route path="/contact" component={Contact} />
//             <Route path="/about" component={About} />
//             <Route path="/footer" component={Footer} />

//         </div>
//     </Router>
// )
ReactDOM.render(
    <>
    <App />
    </>,document.getElementById('root'));