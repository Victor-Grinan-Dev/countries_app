import React from 'react';
import logo from '../assets/images/meLogo.png';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navContainer">

      <div className="logo">
        <NavLink to='/'><img src={logo}/></NavLink> 
      </div>

      <div className="navLinkContainer" >
        <NavLink to="/">Home</NavLink>
        <NavLink to="browse">Countries</NavLink>
        <a href="https://www.bc.fi/?gclid=Cj0KCQjwmuiTBhDoARIsAPiv6L957izCclO7mHzuc9Q4NksNezhLDQ4OZ9Xqjn5T-regQ-2zJDkA69UaAlLQEALw_wcB" target="blank"> HBC </a>

      </div> 
    </div>
  )
}

export default Navbar;