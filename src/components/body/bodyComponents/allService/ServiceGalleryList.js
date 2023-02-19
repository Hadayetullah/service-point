import React, { Component } from "react";


import { Card, CardBody, CardTitle } from "reactstrap";
import './ServiceGalleryList.css';


class ServiceGalleryList extends Component {
  state = {
    show: false,
    limit: 6
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
    this.setState(state => ({ show: !state.show }));
  };


  render() {

    const { galleryItem, viewDetail } = this.props;
    const { show, limit } = this.state;
    

    return (
      <div className="container">

        <div className="all-service">
          <div className="row">
            <h3>{galleryItem.title}</h3>

              {galleryItem.services
                .slice(0, show ? galleryItem.services.length : limit)
                .map((product, i) => {
                  return(
                    <div key={i} className="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                      <Card 
                        onClick={()=>viewDetail(galleryItem.id, product.id)}
                        className="service"
                        style={{
                          cursor:"pointer",
                          background: "#F5F5F5",
                          margin: "15px -11px 10px -11px",
                          textAlign: "center",
                          height: "170px",
                          padding:"20px",
                          borderRadius: "0px"
                        }}
                      >
                        <img src={product.src} alt={product.title} 
                          style={{
                            width:"90px",
                            margin: "0 auto"
                          }} 
                        />
                        <CardBody className="service-body">
                          <CardTitle tag={"h6"} style={{color: "#5C5C5C"}}>
                            {product.title}
                          </CardTitle>
                        </CardBody>
                      </Card>
                    </div>
                  )
                }
                )
              }

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