import React from "react";
import {Link} from 'react-router-dom';

const ColorIndex = ({colors})=>{
    return (
        <ul>
            <li><Link to='/colors/new'>Add Color</Link></li>
            {
                colors.map(c => {
                    return <li><Link to={'/colors/' + c.name}>{c.name}</Link></li>; 
                })
            }
        </ul>
    );
};



export default ColorIndex; 