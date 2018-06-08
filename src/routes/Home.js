import React, { Component } from 'react';
import './Home.css';
const data = [
]

class Home extends Component {
  render() {
    return (
      <div className="container">
        {
          data.map((project, id) => {
            return (
              <div key={id} className="slide" style={{ backgroundImage: `url(${project.img})` }} >
                <div className="slide-inside">
                  <h2>{project.title}</h2>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Home;