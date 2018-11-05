'use strict';

import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

class Menu extends React.Component{
  render(){
    return(
      <div className="menu">
        <Link to=""><button type="button">Home</button></Link>
        <div className="dropdown">
          <button className="dropbtn">Genres</button>
          <div className="dropdown-content">
            <a href="#">Comedy</a>
            <a href="#">Drama</a>
            <a href="#">Fiction</a>
            <a href="#">Romance</a>
            <a href="#">Adventure</a>
            <a href="#">Tragedy</a>
          </div>
        </div>
        <Link to="/register"><button type="button">Register</button></Link>
        <Link to="/addNewBook"><button type="button">Add new book</button></Link>                     
      </div>
    );
  }
}

export default Menu;
