import React from 'react';
import "../App.css";

const Header = () =>  {

    return(
        <div className='header'>
           <img src='./imgs/rocket.svg' alt='Rocket'></img>
           <ul>
               <li> Home </li>
               <li> Nasa </li>
               <li> Contact </li>
           </ul>
        </div>
    )
}

export default Header;