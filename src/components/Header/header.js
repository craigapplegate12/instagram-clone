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
                    <select className="search" type="text" placeholder="Select Profile" />
                    <button className="searchIcon"> Go! </button>
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