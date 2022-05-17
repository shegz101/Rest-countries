import React from 'react';
import CountryDetails from './CountryDetails';
import { useState, useEffect} from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { useParams, useHistory } from 'react-router-dom';

const API_URL = "https://restcountries.com/v3.1/name";

const CountryInfo = () => {
  const { name } = useParams();
  const history = useHistory();
  const [countries, setCountries] = useState([]);
  
  const searchCountries = async (name) => {
    const response = await fetch(`${API_URL}/${name}`);
    const data = await response.json();
    setCountries(data);
    console.log(data);
  }
  
  useEffect(() => {
    searchCountries(name);
}, [name]);
    return ( 
        <div>
           <div className="country-prev-btn" onClick={() => history.goBack()}>
              <div className='prev-icon'>
                 <HiOutlineArrowNarrowLeft />
              </div>
              <div className='prev-note'>
                 <p>Back</p>
              </div>
           </div>
          {
            <div className='country-details'>
                <div className='img-details'>
                  {countries.map((country) => (
                    <>
                     <img src={country.flags.png} className="detail-image" alt={country.name.common}/>
                    </>
                  ))}
                </div>
                <div className='text-details'>
                   {countries.map((country) => (
                      <CountryDetails Key={country.area}
                      name={country.name.common} 
                      nativeName={Object.keys(country.name.nativeName).map((native) => (<>{country.name.nativeName[native].common}</>))}
                      population={country.population}
                      region={country.region}
                      subregion={country.subregion}
                      border={country.borders}
                      tld={country.tld[0]}
                      currency={Object.keys(country.currencies).map((current) => (<>{country.currencies[current].name}</>))}
                      capital={country.capital[0]}
                      languages={Object.values(country.languages).map((lang) => (<>{lang}</>))}
                      />
                  ))
                   }
                </div>
            </div>
          }
         
        </div>
        
     );
}
 
export default CountryInfo;
