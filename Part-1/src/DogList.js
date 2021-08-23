import React from 'react'; 
import './DogList.css';

const DogList = ({dogs})=>{
    return (<div className='dog-list'>
            {dogs.map(d => <section><h3 className={'dog-list-h3'}>{d.name}</h3><img className='dog-list-img' src={d.src} alt={d.name} /></section>)}
    </div>);

};

export default DogList; 