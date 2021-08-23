import React from 'react';
import { useParams } from 'react-router';
import './DogDetails.css';


const DogDetails = ({dogs})=>{
    const name = useParams().name; 
    const details = dogs.find(d => d.name.toLowerCase() === name); 

    return (<>
        <h2>{details.name} Age {details.age}</h2>
        <img className='dog-details-img' src={details.src} alt={name} />
        <ul>
            {details.facts.map(f=><li>{f}</li>)}
        </ul>
    </>); 
};


export default DogDetails;