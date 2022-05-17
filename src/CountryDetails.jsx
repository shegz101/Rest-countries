import React from 'react';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const CountryDetails = ({name, nativeName, population, region,border, subregion, tld,capital,currency,languages}) => {
    const [countryBorders, setCountryBorders] = useState([]);
    const countryBord = [];
    // const boarding = {border};
    function findBorder ()  {
        border.forEach(bord => {
            fetch(`https://restcountries.com/v3.1/alpha/${bord}`)
                .then(res => res.json())
                .then(data => {
                    countryBord.push(data[0].name.common);
                    setCountryBorders(countryBord);
                    console.log(countryBord)
                    // console.log(data[0].name.common)
                })
        })  
    }
    // findBorder();
    useEffect(() => {
        findBorder();
        return () => {
            setCountryBorders([]);
        };
    }, []);
    
    return (
<> 
    <div className="text-description">
        <div className="text-first">
           <h1 className='country-name'>{name}</h1>
           <p className="country-native"><span>Native Name</span>: {nativeName.slice(0,1)}</p>
           <p className='country-population'><span>Population</span>: {population.toLocaleString('en-US')}</p>
           <p className='country-region'><span>Region</span>: {region}</p>
           <p className='country-subregion'><span>Sub Region</span>: {subregion}</p>
           <p className='country-capital'><span>Capital</span>: {capital}</p> 
        </div>
        

        <div className="text-second">
           <p className='country-level'><span>Top Level Domain</span>: {tld}</p>
           <p className='country-currency'><span>Currencies</span>: {currency}</p>
           <p className='country-languages'><span>Languages</span>: {languages}</p>
       </div>
    </div>

    <div className="border-container">
    
    <span>Border Countries:</span>{

        countryBorders.map((bor, i) => {
            return (
                <Link key={i} to={`/countryinfo/${bor}`}>
                   <div className='border-button'>
                      <button className='border-btn'>{bor}</button>
                   </div>
                </Link>
            )
            
        })
     }
    </div>
</>
);
}

export default CountryDetails;