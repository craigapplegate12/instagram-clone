import React, { Component } from 'react';
import './header.css'


class Header extends Component {
    render() {
      return (
        <nav className="head">
          <div className="head-menu">
            <div className="head-brand">
              <a className="head-brand-logo" href="/home">
               
              </a>
            </div>
          </div>
        </nav>
      );
    }
  }

  export default Header;