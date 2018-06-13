import React, { Component } from 'react'; 
import Swiper from 'react-id-swiper';
import { Parallax, Background } from 'react-parallax';
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
  'http://www.bensonhospital.org/wp-content/uploads/2017/08/Desk-Background.jpg',
]

class Work extends Component {
  render() {
    const params = {
      direction: 'vertical',
      slidesPerView: 1,
      mousewheel: {
        sensitivity: 550
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    };
    return (
      <div className="container">
        <Swiper {...params}>
          {
            data.map((project, id) => {
              return (
                <div style={{height: '100%'}}>
                  <Parallax
                    blur={2}
                    bgImage={bg[id]}
                    bgImageAlt="the cat"
                    strength={200}
                    bgStyle={{ backgroundSize: 'cover' }}
                    bgHeight="100%"
                    bgWidth="auto"
                    className="uw-parallax"
                    strength={500}
                  >
                  <div className="component">
                    <div className="title">
                      <h2>{project}</h2>
                    </div>
                  </div>
                </Parallax>
                </div>
              );
            })
          }
        </Swiper>
      </div>
    );
  }
}

export default Work;