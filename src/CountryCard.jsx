import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({country}) => {
 return (
   <div className="country-card">
      <Link key={country.name} to={`/countryinfo/${country.name.common}`}>
         <div className='country-image'>
            <img src={country.flags.png} alt={country.name.common}/>
         </div>
      </Link>
         <div className="country-info">
            <h1>{country.name.common}</h1>
            <p><span className='population-section'>Population</span>: {country.population.toLocaleString('en-US')}</p>
            <p><span className='region-section'>Region</span>: {country.region}</p>
            <p><span className='capital-section'>Capital</span>: {country.capital}</p>
        </div>
   </div>
 )
}

export default CountryCard;