import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const PlumbingSanitary = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10">
          <div style={{ width: "100%" }}>
            <div className="detail-middle-top">
              <h2>
                How to book an appointment{" "}
                <FontAwesomeIcon
                  style={{ fontSize: "20px" }}
                  icon={faArrowRight}
                />
              </h2>
              <div className="visit-summary-child">
                <strong style={{ color: "#56465E" }}>Select service</strong>
                <p>
                  From the category, select the service you are looking for.
                </p>
                <p>Check price-list by clicking ‘View Price List’. </p>
              </div>
              <div className="visit-summary-child">
                <strong style={{ color: "#56465E" }}>Book your schedule</strong>
                <p>Select your convenient time slot.</p>
              </div>
              <div className="visit-summary-child">
                <strong style={{ color: "#56465E" }}>Place order</strong>
                <p>Confirm your order by clicking ‘Book an Appointment’.</p>
              </div>
            </div>

            <div className="detail-middle-middle">
              <h2>Details</h2>
              <p>
                All your Plumbing and Sanitary-related problems will be taken
                care of by BD Service Point marketplace. We have trusted
                professionals who are experts in fitting, installations, and
                drainage related issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlumbingSanitary;
