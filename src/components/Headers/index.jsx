import React from 'react';
import './Header.style.css';

const Header=()=>{
    return(
        <header className="header">
            <div>
            <a className="menu" href="#">Logo</a>
            </div>
            <nav>
                <ul>
                    <li><a className="menu" href="#">Home</a></li>
                    <li><a className="menu" href="#">Services</a></li>
                    <li><a className="menu" href="#">About Us</a></li>
                    <li><a className="menu" href="#">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;
