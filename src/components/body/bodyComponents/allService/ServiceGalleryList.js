import React, { Component } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import './ServiceGalleryList.css';

import { Navigate } from "react-router-dom";



class ServiceGalleryList extends Component {
  state = {
    show: false,
    limit: 6,
    isSelected: false,
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

  viewOrderDetail = () =>{
    this.setState({isSelected: true});
  }

  render() {

    const { galleryItem } = this.props;
    const { show, limit, isSelected } = this.state;

    if(isSelected){
        return <Navigate to="/order" />;
    }
    

    return (
      <div className="container">

        <div className="all-service">
          <div className="row">
            <h3>{galleryItem.title}</h3>

              {galleryItem.services
                .slice(0, show ? galleryItem.services.length : limit)
                .map((product, i) => (
                  <div key={i} className="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                    <Card 
                      onClick={this.viewOrderDetail}
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
                ))
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