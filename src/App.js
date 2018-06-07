import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import { Navbar } from './components';
class App extends Component {
  render() {
    return (
      <Router>
        <div id="main">
        <Navbar />
        <main>
          <Route
            exact
            path="/" 
            render={() => (
              <Home />
            )} 
          />
          <Route
            path="/about"
            render={() => (
              <About />
            )}
          />
        </main>
        </div>
      </Router>
    );
  }
}

export default App;
