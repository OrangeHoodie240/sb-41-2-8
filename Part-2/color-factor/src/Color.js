import React from 'react';
import {useParams, Link, useHistory} from 'react-router-dom';


const Color = ({colors})=>{
    const colorName = useParams().color;
    const color = colors.find(c => c.name === colorName); 
    const history = useHistory();
    if(!color){
        history.push('/colors');
        return (<></>);
    }

    const styles = {backgroundColor: color.color, width: '100vw', height: '100vh'}; 
    return (
                <div style={styles}>
                    <Link to='/colors'>Go Back</Link>
                </div>

    );
};


export default Color; 