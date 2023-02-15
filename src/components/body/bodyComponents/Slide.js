


import React from 'react';
import './Slide.css';

class Slide extends React.Component {
  state = {
    images: ["asset/example.jpg", "asset/example2.jpg", "asset/example3.jpg"],
    activeIndex: 0,
  };

  componentDidMount() {
    setInterval(this.nextImage, 5000);
  }

  nextImage = () => {
    const { activeIndex, images } = this.state;
    const lastIndex = images.length - 1;
    const shouldResetIndex = activeIndex === lastIndex;
    const index = shouldResetIndex ? 0 : activeIndex + 1;

    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const {images} = this.state;

    return (
      <div className="background-slider">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={index === this.state.activeIndex ? 'active' : 'previous'}
          />
        ))}
      </div>
    );
  }
}

export default Slide;
