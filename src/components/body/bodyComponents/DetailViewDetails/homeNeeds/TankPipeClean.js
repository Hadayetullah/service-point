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

              <h4>What’s Included?</h4>
              <ul>
                <li>
                  Inspection of the underground water reservoir overhead water
                  tank.
                </li>
                <li>
                  Removal of sludge and dirt from the interior of the tank Using
                  High-Pressure jet.
                </li>
                <li>Scrubbing of the water tanks interior wall.</li>
                <li>
                  Disinfection of water tank using the appropriate chemical.
                </li>
                <li>Safe disposal of wastewater.</li>
                <li>
                  Number of required resource 3 to 4 cleaners (Depending on the
                  size)
                </li>
                <li>
                  Service duration 3 hours (Might vary depending on the size)
                </li>
              </ul>

              <h4>Service Features</h4>
              <ul>
                <li>Water Tank Cleaning</li>
                <li>PVC Pipe Cleaning</li>
                <li>Water Pipe Cleaning</li>
                <li>Septic Tank Cleaning</li>
              </ul>

              <h2>Details of Tank Cleaning Services</h2>
              <p>
                Looking for water tank cleaning service near you? With
                professional service providers BD Service Point will deliver
                services to make your water tank free from all types of waste
                and germs. Water is the most important liquid to sustain in our
                everyday life. We use water in every sphere of life like
                drinking, cooking, bathing, cleaning etc. So, it is very
                important to store this water in clean and hygienic environment.
                Through our professional service providers we offer full service
                and cleaning packages for all types of water tanks. Our trained
                tank cleaners are highly trained to provide the best tank
                cleaning services.
              </p>

              <h4>Payment</h4>
              <p>
                After service completion you have to pay through BD Service
                Point app or Cash on Delivery.
              </p>
              <p>
                <strong>Important Note:</strong> Water tank needs to be kept
                empty prior to the service delivery.
              </p>

              <h4>Pre-Service instruction</h4>
              <ul>
                <li>Customer needs to provide ladder if required.</li>
                <li>
                  Make Sure Your Tank Empty Before Service Provider Reach The
                  Place.
                </li>
                <li>
                  In terms of pest control Customer must get out of home for at
                  least 12 hour.
                </li>
                <li>Please keep your valuable things in a safe location.</li>
                <li>Customer must provide electricity if required.</li>
              </ul>

              <h4>
                <strong>Service Duration:</strong> 6 hours (might vary depending
                on the size)
              </h4>
              <p>
                <strong>Service Warranty:</strong> In Cleaning Service there
                have No Service Warranty Damage Claim Warranty: In Cleaning
                Service If there have any damage by the service provider then
                the customer needs to inform us within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TankPipeClean;
