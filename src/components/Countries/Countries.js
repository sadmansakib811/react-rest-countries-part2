import React, { useEffect, useState } from 'react';
import Country from '../SingleCountry/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountry] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data=> setCountry(data))
    }, []);
    return (
        <div >
            <h1>Hello World</h1>
            <div className='countries-container'>
            {
                countries.map(country=> <Country
                //aikhane issa kore sadman nam disi. bam pasher nam jeta dibo props er por
                // sei nam dhorei call korte hbe. exm: Country.js file a amra props.sadman
                // likhesi
                
                sadman ={country.name.common}
                timezone = {country.timezones}

                // uporer moto country er ekta ekta data Country.js a na pathiye amra
                // direct country ta kei Country.js a patahi dite pari then oikhane theke data show kora jabe
                country ={country}
                // eta warning shoranor jonno ekta key diyesi
                key={country.cca3}
                ></Country>)
            }
            </div>
            
        </div>
    );
};

export default Countries;