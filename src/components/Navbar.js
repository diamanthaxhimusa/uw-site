import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div style={{ width: '100%', height: 40, backgroundColor: '#424242' }} >
        <nav>
          <ul style={{ listStyleType: 'none', margin: 0}} >
            <li style={{ float: 'left', padding: 10 }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                Home
              </Link>
            </li>
            <li style={{ float: 'left', padding: 10 }}>
              <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export { Navbar };