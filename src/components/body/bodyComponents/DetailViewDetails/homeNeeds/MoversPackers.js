import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const MoversPackers = () => {
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
              <h2>House Shifting Service</h2>
              <p>
                Planning to shift your house to a new location? Looking for
                hassle-free house shifting services in Bangladesh near you for
                safe relocation? Don’t worry. BD Service Point has best movers
                for household furniture, appliances and goods shifting at the
                competitive price in Bangladesh.
              </p>
              <h2>Our Available Home Shifting Services</h2>
              <h5>Home Shifting Service for Family :</h5>
              <p>
                Best shifting service at a competitive price from your doorstep
                for a safe relocation. Available options:
              </p>
              <ul>
                <li>
                  Household goods shifting service with/without packaging.
                </li>
                <li>1 Bedroom moving service with/without packing.</li>
                <li>2 Bedroom moving service with/without packing.</li>
                <li>3 Bedroom moving service with/without packing.</li>
                <li>4 Bedroom moving service with/without packing.</li>
              </ul>
              <p>
                <strong>
                  Note: All home relocation services are available within the
                  city and outside the city.{" "}
                </strong>
              </p>

              <h4>House Shifting Services for Bachelors:</h4>
              <p>
                BD Service Point is offering shifting service for Bachelors for
                the most competitive price. Options for this shifting service:
              </p>
              <ul>
                <li>
                  Bachelor household goods shifting service within the city
                </li>
                <li>Bachelor household goods shifting outside city</li>
              </ul>

              <h4>Furniture & Appliance Shifting</h4>
              <p>
                Our expert mover will load your belongings including your home
                furniture, electronics and appliances onto the moving
                transportation. Options Household Furniture Shifting: Chair,
                Table, Sofa, Divan, Bed, Almira, Wardrobe, Dressing Table and
                Mattress etc. Electronics & Appliances Shifting: Refrigerator,
                AC, TV, Oven, Computer, Washing Machine and Fan etc.
              </p>

              <h4>Household Goods Shifting</h4>
              <p>
                BD Service Point is one of the best service providers and well
                expertise in household shifting services in all over Bangladesh.
                There are so many types of household goods like that glassware,
                kitchenware, tableware, kitchen utensils, plastic products,
                clothes and so many household items. Obviously, the single one
                person cannot make your household shifting then the packers and
                movers need is obligatory. But you can make the household moving
                or relocation problem simple and easy. BD Service Point can make
                your household goods shifting easy and safe.
              </p>

              <h4>Free Consultancy for Home Relocation</h4>
              <p>
                A general home moving consultant is a specialist within a moving
                company that will assist you with your home relocations. Either
                type of consultant will assist with services needed, scheduling
                services and ultimately estimating what will be moved and how
                will be moved and the estimated cost involved with that move.
              </p>

              <h4>Terms of Shifting Services</h4>
              <ul>
                <li>
                  Order placing time minimum of 4 hours before the service time.
                </li>
                <li>
                  Customers may be required to provide delivery home addresses
                  for safety purposes before service delivery.
                </li>
                <li>
                  BD Service Point is not responsible for any loss or damage to
                  any valuable or breakable items when the service provider is
                  in your premises. We advise you to keep such items in a safe
                  and secure place and supervise the service provider during
                  service.
                </li>
                <li>
                  BD Service Point will not be liable for any pre-existing
                  issues/potential risks reported by the beautician but not
                  handled due to customer refusal to compensate the same.
                </li>
                <li>
                  Even though the service provider is background checked and
                  verified by BD Service Point for (safety and security), the
                  respective customers will be liable for their personal and
                  product. Please check your product before leaving the service
                  provider.
                </li>
                <li>
                  Customers need to shift their personal product. (i.e laptop,
                  TV, moneybag, ornament, or fragile product)
                </li>
                <li>
                  The service provider is not liable for any accidental damage
                  if the customer didn’t take shifting is not packing service.
                </li>
                <li>
                  Work dates could be postponed or changed subject to any
                  political or natural crisis cause.
                </li>
                <li>
                  Service provider and client both alignment can change the
                  service schedule time before 24 hours if needed.
                </li>
                <li>Pick up ( Starts From) 1700 per Trip</li>
              </ul>

              <h4>Pricing & Payment</h4>
              <p>
                Payment: After service completion - you can pay through online
                or cash on delivery. After payment, please make sure that you
                have received the SMS containing the money receipt.
              </p>
              <p>
                <strong>
                  Minimum of 20% or as service provider needs, advance required
                  for order confirmation after work order placement, make sure
                  your advance payment is shown in apps and check the
                  confirmation SMS.
                </strong>
              </p>
              <p>
                <strong>Note: Price may change after inspection.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoversPackers;
