import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Link, Redirect, withRouter } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="app-header" >
        <nav>
          <ul className="nav-list" >
            <li className={`nav-item ${this.props.location.pathname == '/home' ? '' : 'roll'}`}>
              <NavLink to="/home" className="nav-link" data-title="Home" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className={`nav-item ${this.props.location.pathname == '/about' ? '' : 'roll'}`}>
              <NavLink to="/about" className="nav-link" data-title="About" activeClassName="active">
                About
              </NavLink>
            </li>
            <li className={`nav-item roll`}>
              <Link to="/home" className="nav-link" data-title="Work">
                Work
              </Link>
            </li>
            <li className={`nav-item roll`}>
              <Link to="/about" className="nav-link" data-title="Clients">
                Clients
              </Link>
            </li>
            <li className={`nav-item roll`}>
              <Link to="/about" className="nav-link" data-title="Contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default withRouter(Navbar);