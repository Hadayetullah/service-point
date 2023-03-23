import React, { Component } from "react";
import { connect } from "react-redux";
import "./DetailView.css";

import { Card, CardImg } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBangladeshiTakaSign,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

// Home Needs
import HouseShifting from "./DetailViewDetails/homeNeeds/HouseShifting";
import CommercialShifting from "./DetailViewDetails/homeNeeds/CommercialShifting";
import CleaningPestControl from "./DetailViewDetails/homeNeeds/CleaningPestControl";
import HomeDeepClean from "./DetailViewDetails/homeNeeds/HomeDeepClean";
import SofaCarpetClean from "./DetailViewDetails/homeNeeds/SofaCarpetClean";
import TankPipeClean from "./DetailViewDetails/homeNeeds/TankPipeClean";
import BathroomKitchenClean from "./DetailViewDetails/homeNeeds/BathroomKitchenClean";
import PremiumClean from "./DetailViewDetails/homeNeeds/PremiumClean";
import PaintingRenovation from "./DetailViewDetails/homeNeeds/PaintingRenovation";
import Plumbing from "./DetailViewDetails/homeNeeds/Plumbing";
import MoversPackers from "./DetailViewDetails/homeNeeds/MoversPackers";

// AC Repair
import AcRepair from "./DetailViewDetails/acRepair/AcRepair";

// Appliances
import CCTVRepairInstall from "./DetailViewDetails/appliances/CCTVRepairInstall";
import Sanitary from "./DetailViewDetails/appliances/Sanitary";

// Special Services
import PickupRruckRental from "./DetailViewDetails/specialServices/PickupRruckRental";

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
    const parentId = localStorage.getItem("parentId");
    const childId = localStorage.getItem("childId");

    const data = this.props.data.galleryItems.serviceDetailsData[parentId - 1];
    const childData = data.services[childId - 1];
    const title = childData.item;
    const textData = childData.data;

    // const homeNeedsList = [Plumbing, MoversPackers];

    // const appliances = [CCTVRepairInstall, Sanitary];
    // const specialServices = [PickupRruckRental];

    let displayContent = null;

    if (childData.componentName === "HouseShifting") {
      displayContent = <HouseShifting />;
    } else if (childData.componentName === "CommercialShifting") {
      displayContent = <CommercialShifting />;
    } else if (childData.componentName === "CleaningPestControl") {
      displayContent = <CleaningPestControl />;
    } else if (childData.componentName === "HomeDeepClean") {
      displayContent = <HomeDeepClean />;
    } else if (childData.componentName === "SofaCarpetClean") {
      displayContent = <SofaCarpetClean />;
    } else if (childData.componentName === "SofaCarpetClean") {
      displayContent = <SofaCarpetClean />;
    } else if (childData.componentName === "TankPipeClean") {
      displayContent = <TankPipeClean />;
    } else if (childData.componentName === "BathroomKitchenClean") {
      displayContent = <BathroomKitchenClean />;
    } else if (childData.componentName === "PremiumClean") {
      displayContent = <PremiumClean />;
    } else if (childData.componentName === "PaintingRenovation") {
      displayContent = <PaintingRenovation />;
    } else if (childData.componentName === "Plumbing") {
      displayContent = <Plumbing />;
    } else if (childData.componentName === "MoversPackers") {
      displayContent = <MoversPackers />;
    } else if (childData.componentName === "AcRepair") {
      displayContent = <AcRepair />;
    } else if (childData.componentName === "CCTVRepairInstall") {
      displayContent = <CCTVRepairInstall />;
    } else if (childData.componentName === "Sanitary") {
      displayContent = <Sanitary />;
    } else if (childData.componentName === "PickupRruckRental") {
      displayContent = <PickupRruckRental />;
    }

    // const generateHomeNeedsComponent = (componentName) => {
    //   for (let i in homeNeedsList) {
    //     console.log("Before: ", homeNeedsList[i].name);
    //     if (componentName === homeNeedsList[i].name) {
    //       let BringComponent = homeNeedsList[i];
    //       console.log("After: ", homeNeedsList[i].name);
    //       displayContent = <BringComponent />;
    //       console.log("dlfhsdsfsdhofjo");
    //       // break;
    //     }
    //   }
    // };

    // const generateAppliancesComponent = (componentName) => {
    //   console.log(componentName);
    //   for (let i in appliances) {
    //     if (componentName === appliances[i].name) {
    //       let BringComponent = appliances[i];
    //       displayContent = <BringComponent />;
    //       // break;
    //     }
    //   }
    // };

    // const generateSpecialServicesComponent = (componentName) => {
    //   console.log(componentName);
    //   for (let i in specialServices) {
    //     if (componentName === specialServices[i].name) {
    //       let BringComponent = specialServices[i];
    //       displayContent = <BringComponent />;
    //       // break;
    //     }
    //   }
    // };

    // const componentName = childData.componentName;
    // switch (data.id) {
    //   case 1:
    //     generateHomeNeedsComponent(componentName);
    //     break;
    //   case 2:
    //     displayContent = <AcRepair />;
    //     break;
    //   case 3:
    //     generateAppliancesComponent(componentName);
    //     break;
    //   case 4:
    //     generateSpecialServicesComponent(componentName);
    //     break;
    // }

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
                    src="asset/Untitled-2.jpg"
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
                    width: "165px",
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
                    <p>Service Warranty Upto 7 Days of Service</p>
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
