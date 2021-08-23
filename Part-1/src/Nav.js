import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = ({dogNames})=>{
    return (
        <nav>
            {dogNames.map(n => {
                return (<span><Link className='link' to={'/dogs/' + n}>{n}</Link>&nbsp; &nbsp;</span>);
            })}
        </nav>
    );
};



export default Nav;