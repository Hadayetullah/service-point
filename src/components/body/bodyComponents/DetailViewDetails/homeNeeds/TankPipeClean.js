import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const TankPipeClean = () => {
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
              <h2>Overview Of Tank & Pipe Cleaning Service</h2>

              <h4>Service Features</h4>
              <ul>
                <li>Removal of sludge, dirt and debris</li>
                <li>Scrubbing of the interior tank wall</li>
                <li>Disinfection using the appropriate chemical</li>
                <li>Safe disposal of waste</li>
              </ul>

              <h4>What’s Excluded?</h4>
              <ul>
                <li>Repairing</li>
              </ul>

              <h4>Our Services</h4>
              <ul>
                <li>
                  Underground and overhead tank Cleaning (Automatic Method)
                </li>
                <li>PVC Overhead Water Tank Cleaning</li>
                <li>Septic Tank Cleaning</li>
              </ul>

              <h4>Price Includes</h4>
              <ul>
                <li>Service charge</li>
                <li>Proper Chemicals</li>
                <li>Machinery and Tools</li>
                <li>
                  Payment: After service completion you have to pay through BD
                  Service Point app or Cash on Delivery.
                </li>
                <li>
                  Important Note: Water tank needs to be kept empty prior to the
                  service delivery.
                </li>
              </ul>

              <h4>Pricing Terms</h4>
              <p>The price mentioned is estimated and may depend on:</p>
              <ul>
                <li>Depth of the tank</li>
                <li>Total volume of the tank in cft.</li>
                <li>Complexity of the work</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TankPipeClean;
