import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.scss';

const Header = () => {
    return (
        <div className="header">
            <h1>STUDENTS INFO</h1>
            <div className="menu"> 
                <Link to={'/'}><button className="menu__options">Form</button></Link>    
                <Link to={'/table'}><button className="menu__options">Table</button></Link>
            </div>
        </div>
    );
}
 
export default Header;