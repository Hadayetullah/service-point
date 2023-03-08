import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Plumbing = () => {
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

              <h4>Plumbing & Sanitary Related Service</h4>
              <ul>
                <li>Sink Installation</li>
                <li>Sink Repair</li>
                <li>Sink Blockage</li>
                <li>Plumbing Check Up</li>
                <li>Water Tap Servicing</li>
                <li>Water Meter Servicing</li>
                <li>Water Pipe Blockage</li>
                <li>Water Pipe Installation</li>
                <li>Tiles Fitting</li>
              </ul>

              <h4>Service Features</h4>
              <ul>
                <li>Well-trained Workmen.</li>
                <li>7 Days Service Warranty</li>
                <li>Doorstep service</li>
                <li>Safety Assurance</li>
              </ul>

              <h4>Pricing</h4>
              <ul>
                <li>Only Service Charge</li>
                <li>Visiting Charges is BDT 100 if no service is availed</li>
                <li>Excludes all components and parts (if used)</li>
                <li>Excludes Transportation cost (if applied)</li>
              </ul>

              <h4>Payment</h4>
              <p>
                After service completion, customer will pay through BD Service
                Point app or Cash on Delivery.
              </p>

              <h4>Warranty</h4>
              <ul>
                <li>
                  • Warranty on consumables and parts will be as per
                  manufacturer.
                </li>
                <li>
                  • 7 Days Service Warranty will be given by BD Service Point
                </li>
              </ul>

              <h2>Terms & Conditions</h2>
              <ul>
                <li>
                  BD Service Point or its representatives are not liable for any
                  direct or incidental loss or damage of the client’s property
                  or personal security during availing the service, caused by
                  accident, theft, burglary or any other type of incidental
                  damages.
                </li>
                <li>
                  The client is singularly responsible for monitoring, using and
                  supervising the activities of the resource provided by service
                  providers.
                </li>
                <li>
                  By availing the service, the client automatically discharge BD
                  Service Point from any claims or legal/moral liabilities other
                  than stated in the details of service specified by BD Service
                  Point.
                </li>
              </ul>

              <h4>Night Shift Service</h4>
              <ul>
                <li>
                  Night Shift Service period starts from 10.00 pm to 8.00 am.
                </li>
                <li>Minimum 4 hours lead time after service booking.</li>
                <li>
                  In excess of BDT 500 will be charged as Emergency Support
                  Service Charge for availing this service at night shift
                  service period.
                </li>
                <li>
                  If for any reason the customer refuses to take service after
                  order confirmation, only the Emergency Support Service Charge
                  will be applicable.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plumbing;
