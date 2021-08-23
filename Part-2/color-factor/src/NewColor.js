import React from 'react';
import { useHistory } from 'react-router-dom';


const NewColor = ({colors})=>{
    const history = useHistory(); 
    function submit(evt){
        evt.preventDefault(); 
        const color = evt.target.querySelector('[name="color"]').value; 
        const name = evt.target.querySelector('[name="colorName"').value; 
        colors.push({color, name}); 
        history.push('/colors');
    }
    return (
        <div>
            <form onSubmit={submit}>
                <input type='color' name='color' required/>
                <input type='text' name='colorName' required placeholder='Enter color name'/>
                <button>Submit</button>
            </form>
        </div>
    );
};


export default NewColor; 