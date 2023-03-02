import React, { Component } from "react";
import { connect } from "react-redux";
import "./DetailView.css";

import { Card, CardImg } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBangladeshiTakaSign,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

import HouseShifting from "./DetailViewDetails/homeNeeds/HouseShifting";
import CommercialShifting from "./DetailViewDetails/homeNeeds/CommercialShifting";

import AcRepair from "./DetailViewDetails/acRepair/AcRepair";

import FAQs from "../../specialComponents/FAQs";
import ScrollToTop from "../../specialComponents/ScrollToTop";

const mapStateToProps = (state) => {
  return {
    data: state,
  };
};

class DetailView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    const homeNeedsList = [HouseShifting, CommercialShifting];

    const parentId = localStorage.getItem("parentId");
    const childId = localStorage.getItem("childId");

    const data = this.props.data.galleryItems[parentId - 1];
    const childData = data.services[childId - 1];
    const title = childData.item;
    const textData = childData.data;

    let displayContent = null;

    // const generateComponent = () =>{

    // }

    switch (data.id) {
      case 1:
        const componentName = childData.componentName;

        for (let i in homeNeedsList) {
          if (componentName === homeNeedsList[i].name) {
            let BringComponent = homeNeedsList[i];
            displayContent = <BringComponent />;
            break;
          }
        }
        break;
      case 2:
        displayContent = <AcRepair />;
        break;
    }

    return (
      <section>
        <div style={{ paddingTop: "20px" }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>{title}</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Card>
                  <CardImg
                    src="asset/example3.jpg"
                    alt="Image"
                    style={{
                      width: "100%",
                      height: "440px",
                      padding: "7px",
                      border: "1px solid #DDDDDD",
                    }}
                  />
                </Card>
              </div>
              <div className="col-md-6">
                <div
                  style={{
                    width: "155px",
                    marginLeft: "5px",
                    borderBottom: "1px solid #FC5C18",
                  }}
                >
                  <h4
                    style={{
                      color: "#FC5C18",
                      marginBottom: "0px",
                      cursor: "pointer",
                    }}
                  >
                    View Price List
                  </h4>
                </div>
                <div className="visit-summary">
                  <div className="visit-summary-child">
                    <strong>Go Cashless</strong>
                    <p>Pay Online or Offline after your service</p>
                  </div>
                  <div className="visit-summary-child">
                    <strong>Professionals</strong>
                    <p>Inhouse Verified and Trained Professionals</p>
                  </div>
                  <div className="visit-summary-child">
                    <strong>What's Excluded?</strong>
                    <p>Price of materials or parts</p>
                    <p>Transportation cost for carrying new materials/parts</p>
                    <p>Warranty given by manufacturer</p>
                  </div>
                  <div className="visit-summary-child">
                    <strong>What's Included?</strong>
                    <p>Only service charge</p>
                    <p>Service Guarantee Upto 7 Days of Service</p>
                  </div>
                </div>
                <br />
                <input
                  type="button"
                  value="Book An Appointment"
                  className="book-button"
                />
                <ul style={{ marginTop: "5px" }}>
                  <li>
                    <FontAwesomeIcon
                      icon={faBangladeshiTakaSign}
                      style={{ fontSize: "13px" }}
                    />{" "}
                    Cash on Delivery Available{" "}
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ fontSize: "15px", fontWeight: 777 }}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div style={{ border: "1px solid #5C636A", marginTop: "30px" }}></div>

        <div
          style={{ padding: "30px 0", background: "#E9E1EC", color: "#2E2E41" }}
        >
          {/* GalleryItems contents */}
          {displayContent}
        </div>

        <div style={{ border: "1px solid #5C636A" }}></div>

        {/* FAQs */}
        <div className="container">
          {textData !== undefined ? <FAQs faqDetail={textData} /> : null}
        </div>

        {/* Scroll To Top */}
        <ScrollToTop />
      </section>
    );
  }
}

export default connect(mapStateToProps)(DetailView);
