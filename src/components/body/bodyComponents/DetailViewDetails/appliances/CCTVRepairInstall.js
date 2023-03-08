import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CCTVRepairInstall = () => {
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

              <h4>Whats Included?</h4>
              <ul>
                <li>CCTV Camera repairing</li>
                <li>Software installation/up-gradation</li>
                <li>Dismounting and mounting</li>
                <li>
                  Cables checking from cameras to monitor or recording devices
                </li>
              </ul>

              <h4>What’s Excluded?</h4>
              <ul>
                <li>Material and component cost (if necessary)</li>
                <li>Transportation cost (if applicable)</li>
              </ul>

              <h4>Payment Terms</h4>
              <ul>
                <li>
                  After service completion you have to pay through BD Service
                  Point app or Cash On Delivery
                </li>
              </ul>
              <p>
                Need help with affordable CCTV Camera installation or repair? BD
                Service Point marketplace provide solution for all types of CCTV
                camera installation and repairing service according to your
                need.
              </p>

              <h4>Service Features</h4>
              <ul>
                <li>CCTV Camera repairing</li>
                <li>Software installation/up-gradation</li>
                <li>Dismounting and mounting </li>
                <li>
                  Cables checking from cameras to monitor or recording devices
                </li>
              </ul>

              <p>
                <strong>Payment:</strong> After service completion you have to
                pay through BD Service Point app or{" "}
                <strong>Cash On Delivery</strong>.
              </p>

              <h4>Terms & Conditions:</h4>
              <p>
                <strong>Warranty:</strong> BD Service Point gives 7 days of
                service warranty. However, warranty on consumable
                materials/parts are as per manufacturer.
              </p>
              <p>
                <strong>Cancellation:</strong> If you cancel the service after
                provided technicians reached at your doorstep then you just have
                to pay BDT 100 as visiting charge.
              </p>
              <p>
                <strong>Pricing:</strong> Service charge is fixed but the price
                will differ if any additional or replacing materials/parts
                installed.
              </p>
              <p>
                <strong>Safety Measures:</strong> Customer will be solely
                responsible for their personal material and the safety of
                household resources.
              </p>
              <p>
                <strong>Discharging:</strong> After service completion the
                customer automatically discharge BD Service Point from further
                liabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CCTVRepairInstall;
