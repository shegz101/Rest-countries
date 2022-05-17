import { useState, useEffect } from "react";
import "./Search.css";
import CountryCard from './CountryCard';
import { AiOutlineSearch } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

const API_URL = "https://restcountries.com/v3.1/name";

const Search = ({selected, setSelected}) => {
    const [isActive, setIsActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [countries, setCountries] = useState([]);
    const [value, setValue] = useState('all');
    const options = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

    const searchCountries = async (name) => {
        const response = await fetch(`${API_URL}/${name}`);
        const data = await response.json();
        setCountries(data);
    }
    const searchAllCountries = async (name) => {
        const response = await fetch(`https://restcountries.com/v3.1/${name}`);
        const data = await response.json();
        setCountries(data);
    }

    const searchRegion = async (name) => {
        const response = await fetch(`https://restcountries.com/v3.1/region/${name}`);
        const region_data = await response.json();
        setCountries(region_data);
    }
    const displayCountry = (value) => {
        if (value === 'all') {
            searchAllCountries('all');
        } else {
            searchRegion(value);
        }
    }
    useEffect(() => {
        displayCountry(value);
    }, [value]);
    return ( 
      <div className="output">
        <div className="Search-field">
           <div className="search">
             <AiOutlineSearch className="search-icon" />
             <input type="text" className="search-input" value={searchValue} 
             onChange={(e) => setSearchValue(e.target.value)}
             placeholder=" Search for a country..."
             onInput={() => searchCountries(searchValue)} />
           </div>
           <div className="dropdown">
              <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}><>{selected}</> <span><MdKeyboardArrowDown className="dropIcon"/></span></div>
              {/* using truthy */}
              {isActive && (
              <div className="dropdown-content">
                  {
                      options.map((option)=> (
                        <div className="dropdown-item" onClick={(e) =>  {setSelected(option); setIsActive(false); setValue(option);}}>
                           {option}  
                        </div>
                      ))
                  }
              </div>
              )}
           </div>
        </div> 
        {
            countries.length > 0 
              ? (
                  <div className="container">
                      {countries.map((country) => (
                          <CountryCard key={country} country={country}/>
                      ))}
                  </div>
              ) : (
                  console.log("Data not found")
              )
        }
        
     </div>
    );
}
 
export default Search;