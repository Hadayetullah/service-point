import React, { Component } from 'react';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';

class BackgroundSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      backgroundImages: [image1, image2, image3]
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { currentImageIndex, backgroundImages } = this.state;
      const newIndex = (currentImageIndex + 1) % backgroundImages.length;
      this.setState({ currentImageIndex: newIndex });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { currentImageIndex, backgroundImages } = this.state;
    const backgroundImageStyle = {
      backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
      backgroundPosition: 'right',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      transition: 'background-image 1s ease-out'
    };
    return (
      <div className="background-slider" style={backgroundImageStyle}>
        <div className="content">
            <h1>Welcome to my website</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla hendrerit lacinia quam vel bibendum. Sed non velit non sapien imperdiet laoreet. Sed in turpis vel metus bibendum auctor. Sed tristique finibus odio, a dignissim magna maximus vel. Fusce rhoncus pharetra malesuada. Donec tincidunt dignissim nunc vitae tempus. Proin non ante non velit ultrices aliquam ac ac arcu.</p>
            <button>Learn More</button>
        </div>

      </div>
    );
  }
}

export default BackgroundSlider;
