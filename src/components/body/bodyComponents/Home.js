import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Home.css";

import ImageSlider from "./imageSlider/ImageSlider";
import ServiceGalleryList from "./allService/ServiceGalleryList";

import ScrollToTop from "../../specialComponents/ScrollToTop";

import { detailView } from "../../../redux/actionCreators";

const Home = (props) => {
  // console.log(props);

  const navigate = useNavigate();
  const galleryItems = useSelector((state) => state.galleryItems);

  const dispatch = useDispatch();
  const viewDetail = (parentId, childId, componentName) => {
    if (componentName != null) {
      dispatch(detailView(parentId, childId));
      navigate("/details");
    }
    // console.log("Component Name: ", componentName);
  };

  return (
    <div>
      <section>
        <ImageSlider />
        {/* <div style={{borderTop: "1px solid #CD3932", }}>
                    <ImageSlider />
                </div> */}
      </section>

      <section style={{ background: "#F5F5F5" }}>
        {galleryItems.serviceDetailsData.map((item, i) => (
          <ServiceGalleryList
            key={i}
            galleryItem={item}
            viewDetail={viewDetail}
          />
        ))}
      </section>

      <section className="workflow">
        <div className="container">
          <div className="workflow-top">
            <div className="workflow-header">
              <h3>Our Workflow</h3>
            </div>
            <p>"Enjoy Your Required Service At 3 Steps Ahead"</p>
          </div>

          <div className="steps">
            <div className="card-group">
              <div className="card step-card">
                <div className="card-body step-card-body">
                  <div className="step-top">
                    <h5 className="card-title">
                      Step <span className="badge cap">1</span>
                    </h5>
                  </div>
                  <img src="/asset/step/step1.png" alt="Image" />
                  <h6 className="card-subtitle">Schedule Your Service</h6>
                  <p className="card-text">
                    Fill Credential, Book Service & Relax
                  </p>
                </div>
              </div>
              <div className="card step-card">
                <div className="card-body step-card-body">
                  <div className="step-top">
                    <h5 className="card-title">
                      Step <span className="badge cap">2</span>
                    </h5>
                  </div>
                  <img src="/asset/step/step2.png" alt="Image" />
                  <h6 className="card-subtitle">Service At Your Home</h6>
                  <p className="card-text">
                    Keep Calm, We Will Serve At Your Door
                  </p>
                </div>
              </div>
              <div className="card step-card">
                <div className="card-body step-card-body">
                  <div className="step-top">
                    <h5 className="card-title">
                      Step <span className="badge cap">3</span>
                    </h5>
                  </div>
                  <img src="/asset/step/step3.png" alt="Image" />
                  <h6 className="card-subtitle">Pay After Service</h6>
                  <p className="card-text">Make Payment After Job Get Done</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="key-features">
        <div className="container">
          <div className="key-features-top">
            <h2>Our Key Features</h2>
            <p>"Delivering Best Quality Services, Securing Your Smile"</p>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="feature">
                <div className="feature-left">
                  <h5>Expert Technician</h5>
                  <p>
                    From switch replacement to complete home renovation, we
                    provide expert hands to every home complication.
                  </p>
                </div>
                <div className="feature-right">
                  <div className="feature-right-inside">
                    <img src="asset/key-features/s-people.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="feature">
                <div className="feature-left">
                  <h5>Services On Demand</h5>
                  <p>
                    Serving 24x7 to our customer is top motto of Ezhome. Now get
                    services at your door anytime, anywhere.
                  </p>
                </div>
                <div className="feature-right">
                  <div className="feature-right-inside">
                    <img src="asset/key-features/s-clock.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="feature">
                <div className="feature-left">
                  <h5>Genuine Price</h5>
                  <p>
                    Easy booking, On-time service delivery, cutting edge
                    resolution through expert hands on Pocket friendly cost.
                  </p>
                </div>
                <div className="feature-right">
                  <div className="feature-right-inside">
                    <img src="asset/key-features/s-taka.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll To Top */}
      <ScrollToTop />
    </div>
  );
};

export default Home;
