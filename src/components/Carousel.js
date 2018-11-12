import React, { Component } from 'react';
// import 'spectre.css/dist/spectre.css';
// import 'spectre.css/dist/spectre-exp.css';
// import 'spectre.css/dist/spectre-icons.css';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Img, Button, Icon } from 'respectre/elements';

class App extends Component {
  render() {
    const { slides } = this.props;
    return (
      <Carousel>
        {slides.map((item, i) => (
          <div key={i}>
            <img src={item.img} />
            <p className="legend">{item.label}</p>
          </div>
        ))}
      </Carousel>
    )
  }
}

App.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default App;
