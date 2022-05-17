import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header';
import Search from './Search'
import './App.css';
import CountryInfo from "./CountryInfo";

function App() {
  const [selected, setSelected] = useState("Filter by Region");
  const [theme, setTheme] = useState('light');
  let theming = localStorage.getItem('data-theme');
  const switchTheme = () => {
    if (theme === 'light' && theming === 'light') {
          setTheme('dark');
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem("data-theme","dark");
    } else {
           setTheme('light');
           document.documentElement.setAttribute('data-theme', 'light');
           localStorage.setItem("data-theme","light");
  }
}
  return (
    <Router>
      <div className="App">
       <Header switchTheme={(switchTheme)} theme={(theme)}/>
       <Switch>
         <Route exact path="/">
           <Search selected={(selected)} setSelected={(setSelected)}/>
         </Route>
         <Route path="/countryinfo/:name">
           <CountryInfo/>
         </Route>
       </Switch>
      </div>
    </Router>
  );
}

export default App;
