import React from "react";
import "./Header.css";
import { MdLightMode} from "react-icons/md";
import {MdOutlineLightMode} from "react-icons/md"
const Header = ({switchTheme, theme}) => {
    return ( 
        <div className="nav">
            <h1 className="main-header">Where  the world?</h1>
            <div>
                <p className="dark">
                {
                   theme !== 'light' ? <MdOutlineLightMode onClick={switchTheme}/> : <MdLightMode onClick={switchTheme}/>
                        
                }  
                Dark mode
                </p>
            </div>
        </div>
     );
}
 
export default Header;