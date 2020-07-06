import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <> 
            <Link to={'/'}><button>Form</button></Link>    
            <Link to={'/table'}><button>Table</button></Link>
        </>
    );
}
 
export default Header;