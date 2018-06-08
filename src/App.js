import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Navbar from './components/Navbar';
class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div id="main">
        <Navbar />
        <main>
          <Route exact path="/" render={() => (
            <Redirect to="/home" />
          )} />
          <Route
            exact
            path="/home" 
            render={() => (
              <Home />
            )} 
          />
          <Route
            exact
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
