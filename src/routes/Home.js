import React, { Component } from 'react';
import ReactPageScroller from 'react-page-scroller';
import './Home.css';
const data = [
  'Project 1',
  'Project 2',
  'Project 3',
  'Project 4',
  'Project 5',
]

const bg = [
  'http://backgroundcheckall.com/wp-content/uploads/2017/12/work-background-7.jpg',
  'http://www.bensonhospital.org/wp-content/uploads/2017/08/Desk-Background.jpg',
  'http://backgroundcheckall.com/wp-content/uploads/2017/12/background-work-10.jpg',
  'https://i.ytimg.com/vi/o0D6Av1BgUM/maxresdefault.jpg',
  '#555',
]

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: 1 };
    this._pageScroller = null;
  }

  goToPage = (eventKey) => {
    this._pageScroller.goToPage(eventKey);
  };

  pageOnChange = (number) => {
    this.setState({ currentPage: number });
  };
  render() {
    return (
      <div className="container">
        <ReactPageScroller transitionTimingFunction="cubic-bezier(0.86, 0, 0.07, 1)" ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
        {
          data.map((project, id) => {
            return (
              <div className="component" style={{ backgroundImage: `url(${bg[id]})` }}>
                <div className="title">
                  <h2 className="title-pr">{project}</h2>
                </div>
              </div>
            );
          })
        }
        </ReactPageScroller>
      </div>
    );
  }
}

export default Home;