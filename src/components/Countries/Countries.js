import React, { useEffect, useState } from 'react';
import Country from '../SingleCountry/Country';

const Countries = () => {
    const [countries, setCountry] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data=> setCountry(data))
    }, []);
    return (
        <div>
            <h1>Hello World</h1>
            {
                countries.map(country=> <Country
                //aikhane issa kore sadman nam disi. bam pasher nam jeta dibo props er por
                // sei nam dhorei call korte hbe. exm: Country.js file a amra props.sadman
                // likhesi
                sadman ={country.name.common}
                timezone = {country.timezones}
                
                ></Country>)
            }
            
        </div>
    );
};

export default Countries;