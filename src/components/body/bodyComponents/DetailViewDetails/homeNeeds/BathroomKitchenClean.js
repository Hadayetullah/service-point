import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const BathroomKitchenClean = () => {
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
              <h2>Overview Of Home Cleaning</h2>

              <h4>What' to Expect</h4>
              <ul>
                <li>Usage of professional cleaning tools</li>
                <li>Reasonable price</li>
                <li>Removal of deep stain</li>
              </ul>

              <h4>What's Exclude</h4>
              <ul>
                <li>Repairing</li>
                <li>Heavy furniture move</li>
                <li>Permanent spot remove</li>
              </ul>

              <h4>Our Home Cleaning Services</h4>
              <ul>
                <li>Bathroom Deep Cleaning (Without Bathtub, Shower Corner)</li>
                <li>
                  Sofa/Chair Cleaning (If need price will be share accordingly)
                </li>
                <li>
                  Kitchen Cleaning (Without Kitchen Hood, inside Cabinet clean,
                  If need price will add accordingly)
                </li>
                <li>Carpet Cleaning</li>
                <li>Home Deep Cleaning</li>
                <li>Window & Thai Cleaning</li>
                <li>Common Space Cleaning</li>
                <li>Floor Deep Cleaning</li>
                <li>Roof-Top Deep Cleaning</li>
              </ul>

              <h4>Note To Customer</h4>
              <ul>
                <li>
                  If Any Delay Happens By Customer Then There Will Be An Extra
                  Charge Add With The Service Price
                </li>
                <li>
                  After Delivering The Service, The Customer Must Cross Check
                  The Service Before The Service Person Leaves The Place After
                  That No Complaint Will Be Accepted
                </li>
                <li>
                  Make Sure To Keep The Expensive Belongings In A Safe Place
                </li>
                <li>
                  Customer Need To Provide Fresh Water And Electricity To
                  Support The Service Person
                </li>
                <li>
                  If The Work Area Increases Then Extra Price Will Be Added
                </li>
                <li>
                  Make Sure No Other Work Is Going On When The Cleaning Service
                  Is Being Delivered.
                </li>
              </ul>

              <h2>Details</h2>
              <p>
                This service will help you to clean your home and also help to
                remove deep stains. Our Service provider will use effective
                chemicals that will wash your home smoothly and neatly.
              </p>

              <h4>Terms & Pricing</h4>
              <ul>
                <li>
                  <strong>Pricing policy: </strong>Price mentioned are based on
                  the minimum quantity stated extra charge will be added if the
                  work scope increases.
                </li>
                <li>
                  <strong>Payment: </strong>After service completion –
                  respective customers will pay online or COD. After payment
                  please make sure, you have received the SMS containing the
                  money receipt.
                </li>
              </ul>

              <h4>Note To Customer</h4>
              <ul>
                <li>
                  If Any Delay Happens By Customer Then There Will Be An Extra
                  Charge Add With The Service Price
                </li>
                <li>
                  After Delivering The Service, The Customer Must Cross-Check
                  The Service Before The Service Person Leaves The Place After
                  That No Complaint Will Be Accepted
                </li>
                <li>
                  Make Sure To Keep The Expensive Belongings In A Safe Place
                </li>
                <li>
                  Customer Need To Provide Fresh Water And Electricity To
                  Support The Service Person
                </li>
                <li>
                  If The Work Area Increases Then Extra Price Will Be Added
                </li>
                <li>
                  Make Sure No Other Work Is Going On When The Cleaning Service
                  Is Being Delivered.
                </li>
              </ul>

              <h2>Night Service: 10 pm to 8 am</h2>
              <ul>
                <li>Night service starts from 10:00 pm to 8:00 am.</li>
                <li>Minimum 4 Hours Lead time after service booking</li>
                <li>
                  In excess of BDT 500 will be charged as Emergency Support
                  Service Charge.
                </li>
                <li>
                  If for any reason the customer refuses to take service after
                  order confirmation, only the Emergency Support Service Charge
                  will be applicable.
                </li>
                <li>
                  BD Service Point will not liable for any direct or incidental
                  loss/damage of the client’s property or personal security
                  during availing of the service, caused by accident, theft,
                  burglary, or any other type of incidental damages.
                </li>
                <li>
                  The client is singularly responsible for monitoring, using,
                  and supervising the activities provided by Service providers.
                </li>
                <li>
                  By availing the service, clients automatically discharge BD
                  Service Point from any claims or legal/moral liabilities other
                  than stated in the Terms of service specified by BD Service
                  Point
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BathroomKitchenClean;
