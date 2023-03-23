import React from 'react';
import  './Country.css'

const Country = (props) => {
    // destructure koreo data pawa jai.niche destructure kore dekhano holo:
    
    const {region, flags} = props.country;
    return (
        <div className='singleCountry'>
          
            {/* ai duita distructure bade kora */}
            <h1>Country Name: {props.sadman}</h1>

            {/* img er line tao destructure er maddhome kora */}
            <img src={flags.png} alt={flags.alt} />

            <p>TimeZone: {props.timezone}</p>
            
            
            {/* Country pura pathanor por Country theke data pawar niwom niche dea holo */}
            <p>Area: {props.country.area}</p>
            
            
            {/* Destructure korar por data pawar niwom niche: */}
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;