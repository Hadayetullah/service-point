import React, { Component } from "react";
import "./ImageSlider.css";

class ImageSlider extends Component {
  state = {
    images: [
      {
        url: "asset/sdasdsd.jpg",
        alt: "Image 1Image 1Image 1Image 1Image 1Image 1Image 1Image 1Image 1Image 1",
      },
      {
        url: "asset/sdasdsd.jpg",
        alt: "Image 2Image 1Image 1Image 1Image 1Image 1Image 1Image 1Image 1Image 1Image 1",
      },
      {
        url: "asset/sdasdsd.jpg",
        alt: "Image between 2 and 3Image 1Image 1Image 1Image 1Image 1Image 1Image 1Image 1",
      },
      {
        url: "asset/sdasdsd.jpg",
        alt: "Image 3Image 1Image 1Image 1Image 1Image 1Image 1Image 1Image 1Image 1",
      },
    ],
    currentIndex: 0,
    previousIndex: null,
    // textClass: "car-text-in",
    // time: 9000,
  };

  // const textClass = this.state.textClass === "car-text-in"
  //       ? "car-text-out"
  //       : "car-text-in";

  //       return {
  //         previousIndex: prevState.currentIndex,
  //         currentIndex: nextIndex,
  //         textClass: textClass,
  //       };

  componentDidMount() {
    // this.time = setTimeout(()=>{
    //   this.setState({textClass:"car-text-out"});
    // }, 7000);

    this.interval = setInterval(() => {
      this.setState((prevState) => {
        // console.log(prevState);
        const nextIndex =
          prevState.currentIndex === this.state.images.length - 1
            ? 0
            : prevState.currentIndex + 1;

        return {
          previousIndex: prevState.currentIndex,
          currentIndex: nextIndex,
          // textClass: "car-text-in",
        };
      });
      // setTimeout(()=>{
      //   this.setState({textClass:"car-text-out"});
      // }, 9000);
    }, 10000);

    // this.textDealy = setInterval(() => {
    //   this.setState({
    //     textClass: this.state.textClass === "car-text-in"
    //       ? "car-text-out"
    //       : "car-text-in"
    //   });
    // }, this.state.textClass === "car-text-in" ? 3000 : 7000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    // clearInterval(this.time);
  }

  render() {
    const { images, currentIndex, previousIndex } = this.state;
    return (
      <div className="car">
        {images.map((image, index) => (
          <React.Fragment key={index}>
            <img
              src={image.url}
              alt={image.alt}
              className={
                index === currentIndex
                  ? "active"
                  : index === previousIndex
                  ? "previous"
                  : ""
              }
            />
            {index === currentIndex && (
              <div className="info-container">
                <div className="car-text-in">
                  <h2>Header Content Will Go Here</h2>
                  <p>Some text content will be here</p>
                  {image.alt}
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default ImageSlider;
