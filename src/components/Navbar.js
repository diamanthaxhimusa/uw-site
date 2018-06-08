import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
  }

  render() {
    return (
      <div className="app-header" >
        <nav>
          <ul className="nav-list" >
            <li className="nav-item roll">
              <NavLink to="/home" className="nav-link" data-title="Home" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item roll">
              <NavLink to="/about" className="nav-link" data-title="About" activeClassName="active">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export { Navbar };