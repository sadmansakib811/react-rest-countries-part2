import React from 'react';
import  './Country.css'

const Country = (props) => {
    return (
        <div className='singleCountry'>
            <h1>Country Name: {props.sadman}</h1>
            <p>TimeZone: {props.timezone}</p>
        </div>
    );
};

export default Country;