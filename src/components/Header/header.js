import React, { Component } from 'react';
import './header.css'


class Header extends Component {
    render() {
      return (
        <div className="header-bar">
    
            <div className="header-tile">

                <div className="links">
                <a className="header-content icon" href="/home">
               
                </a>
                </div>
            </div>

            <div className="header-tile">
                <div className="links">
                <a className="header-content">
                    <input className="search" type="text" placeholder="Search" />
                    <button className="searchIcon"> o' </button>
                </a>
                </div>
            </div>
        
            <div className="header-tile">
                <div className="links">
                <div className="header-content">
                    <a className="explore"></a>
                    <a className="notification"></a>
                    
                    <a className="profile"></a>
                </div>
                </div>

            </div> 
        </div>
      );
    }
  }

  export default Header;