import React, { Component } from "react";

import GalleryTooltip from "./GalleryTooltip";

import "./ServiceGalleryList.css";

class ServiceGalleryList extends Component {
  state = {
    show: false,
    limit: 6,
  };

  componentDidMount() {
    this.updateLimit();
    window.addEventListener("resize", this.updateLimit);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateLimit);
  }

  updateLimit = () => {
    if (window.innerWidth >= 992) {
      this.setState({ limit: 6 });
    } else if (window.innerWidth >= 768) {
      this.setState({ limit: 4 });
    } else if (window.innerWidth >= 576) {
      this.setState({ limit: 3 });
    } else {
      this.setState({ limit: 1 });
    }
  };

  toggleShow = () => {
    this.setState((state) => ({ show: !state.show }));
  };

  render() {
    const { galleryItem, viewDetail } = this.props;
    const { show, limit } = this.state;

    // console.log("Component: ", galleryItem);

    return (
      <div className="container">
        <div className="all-service">
          <div className="row">
            <h3>{galleryItem.title}</h3>

            {galleryItem.services
              .slice(0, show ? galleryItem.services.length : limit)
              .map((product, i) => {
                return (
                  <GalleryTooltip
                    key={i}
                    product={product}
                    gid={galleryItem.id}
                    viewDetail={viewDetail}
                  />
                );
              })}
          </div>
          <button className="d-grid m-auto" onClick={this.toggleShow}>
            {show ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    );
  }
}

export default ServiceGalleryList;
