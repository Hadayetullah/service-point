import React, { Component } from 'react';
import {connect} from 'react-redux';
import './DetailView.css';

import { Card, CardImg } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBangladeshiTakaSign, faCheck } from '@fortawesome/free-solid-svg-icons';

import FAQs from '../../specialComponents/FAQs';
import ScrollToTop from '../../specialComponents/ScrollToTop';



const mapStateToProps = (state) =>{
    return{
        data: state,
    }
};


class DetailView extends Component {
    constructor(props){
        super(props);
    }


    componentDidMount(){
        window.scrollTo(0,0);
    }
    componentDidUpdate(){
        window.scrollTo(0,0);
    }


  render() {

    const parentId = localStorage.getItem("parentId");
    const childId = localStorage.getItem("childId");

    const data = this.props.data.galleryItems[parentId - 1];
    const title = data.services[childId - 1].item;
    // const faqs = data.data;

    // const data = this.props.data.filter[0].filter(i =>{
    //     return i.id === parentId;
    // })[0].services.filter(j =>{
    //     return j.id === childId;
    // })[0];


    // console.log("data : ",parentId -1);
    // console.log(data.data);


    return (
        <section>
            <div style={{paddingTop:"20px"}}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                        <h2>{title}</h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <Card>
                                <CardImg 
                                src='asset/example3.jpg' 
                                alt='Image'
                                style={{
                                    width:"100%",
                                    height:"440px",
                                    padding:"7px",
                                    border:"1px solid #DDDDDD"
                                }} 
                                />
                            </Card>
                        </div>
                        <div className='col-md-6'>
                            <div style={{width:"155px",marginLeft:"5px", borderBottom:"1px solid #FC5C18"}}>
                                <h4 style={{color:"#FC5C18",marginBottom:"0px",cursor:"pointer"}}>View Price List</h4>
                            </div>
                            <div className='visit-summary'>
                                <div className='visit-summary-child'>
                                    <strong>Go Cashless</strong>
                                    <p>Pay Online or Offline after your service</p>
                                </div>
                                <div className='visit-summary-child'>
                                    <strong>Professionals</strong>
                                    <p>Inhouse Verified and Trained Professionals</p>
                                </div>
                                <div className='visit-summary-child'>
                                    <strong>What's Excluded?</strong>
                                    <p>Price of materials or parts</p>
                                    <p>Transportation cost for carrying new materials/parts</p>
                                    <p>Warranty given by manufacturer</p>
                                </div>
                                <div className='visit-summary-child'>
                                    <strong>What's Included?</strong>
                                    <p>Only service charge</p>
                                    <p>Service Guarantee Upto 7 Days of Service</p>
                                </div>
                            </div>
                            <br />
                            <input type="button" value="Book An Appointment" className='book-button' />
                            <ul style={{marginTop:"5px"}}>
                                <li>
                                    <FontAwesomeIcon icon={faBangladeshiTakaSign} style={{fontSize:"13px"}} /> Cash on Delivery Available <FontAwesomeIcon icon={faCheck} style={{fontSize:"15px", fontWeight:777}} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{border:"1px solid #5C636A", marginTop:"30px"}}></div>

            <div style={{padding:"30px 0", background:"#E9E1EC", color:"#2E2E41"}}>
                <div className='container'>

                    <div className='row'>
                        <div className='col-md-10'>
                            <div style={{width:"100%"}}>
                                <div className='detail-middle-top'>
                                    <h2>How to book an appointment <FontAwesomeIcon style={{fontSize:"20px"}} icon={faArrowRight} /></h2>
                                    <div className='visit-summary-child'>
                                        <strong style={{color:"#56465E"}}>Select service</strong>
                                        <p>From the category, select the service you are looking for.</p>
                                        <p>Check price-list by clicking ‘View Price List’. </p>
                                    </div>
                                    <div className='visit-summary-child'>
                                        <strong style={{color:"#56465E"}}>Book your schedule</strong>
                                        <p>Select your convenient time slot.</p>
                                    </div>
                                    <div className='visit-summary-child'>
                                        <strong style={{color:"#56465E"}}>Place order</strong>
                                        <p>Confirm your order by clicking ‘Book an Appointment’.</p>
                                    </div>
                                </div>

                                <div className='detail-middle-middle'>
                                    <h2 style={{marginTop:"15px"}}>
                                        Details <FontAwesomeIcon style={{fontSize:"20px"}} icon={faArrowRight} />
                                    </h2>
                                    <p>
                                        At BD Service Point you can hire expert AC repair service near you. Our professional Service Providers will give you the best AC repair service. From general inspection, to changing AC parts you can avail every AC related service within a few moments.
                                    </p>
                                    <h4>
                                    About <strong style={{color:"#56465E"}}>BD SERVICE POINT'S</strong> AC Repairing Service
                                    </h4>
                                    <p>
                                    BD Service Point is the largest marketplace in Bangladesh where we serve you with every possible service. AC Repairing service is one of our services to repair all types of AC related problems. We deliver expert and AC repair services with integrity from our professional service providers.
                                    </p>
                                    <h5>
                                        Available Services
                                    </h5>
                                    <ul style={{fontSize:"18px"}}>
                                        <li>
                                            AC Checkup
                                        </li>
                                        <li>
                                            AC Basic Servicing
                                        </li>
                                        <li>
                                            AC Gas Charge
                                        </li>
                                        <li>
                                            AC Master Service
                                        </li>
                                        <li>
                                            AC Water Drop Solution
                                        </li>
                                        <li>
                                            AC Installation 
                                        </li>
                                        <li>
                                            AC Shifting Service
                                        </li>
                                        <li>
                                            AC Compressor Fitting
                                        </li>
                                        <li>
                                            AC Dismantling
                                        </li>
                                        <li>
                                            AC Jet Wash
                                        </li>
                                        <li>
                                            AC Service Repairing 
                                        </li>
                                        <li>
                                            Special Corporate Ac Service  
                                        </li>
                                    </ul>
                                    <p>
                                        <strong style={{color:"#56465E"}}>AC Checkup Service: </strong>AC Checkup service offers only the diagnosis of your Air Conditioner by an expert technician who performs initial tests for problem identification. 
                                    </p>
                                    <p>
                                        <strong style={{color:"#56465E"}}>AC Basic Servicing: </strong>AC Basic service offers primary diagnosis, filter cleaning, test and identify problems by an expert AC technician.
                                    </p>
                                    <p>
                                        <strong style={{color:"#56465E"}}>AC Gas Charge: </strong>This service offers a performance checkup and post gas refill. If there is a leakage; most of the time AC can be fixed onsite but sometimes it might take a longer time. For that, you have to wait for 1 or 2 days. 
                                    </p>
                                    <p>
                                        <strong style={{color:"#56465E"}}>AC Master Service: </strong>AC Master Service offers detail cleaning of the indoor and outdoor units including minor problem-fixing (excluding materials and parts). The service charge varies on your AC amount, height, weight and difficulties. 
                                    </p>
                                    <p>
                                        <strong style={{color:"#56465E"}}>AC Water Drop Solution: </strong>This service offers identification of the source of dripping water from your AC and fixation water drainage system accordingly. Any additional materials/parts will be charged separately.
                                    </p>
                                    <p>
                                        <strong style={{color:"#56465E"}}>AC Shifting Service: </strong>This service is to shift your AC unit from one place or floor to the loading truck. Only the service charge is applicable for this service. The service charge varies on your AC amount, height, weight, and difficulties. 
                                    </p>
                                    <p>
                                        <strong style={{color:"#56465E"}}>AC Compressor Fitting With Gas Charge: </strong>This service offers old Compressor removal and new Compressor installation. Compressor price and warranty differ as per manufacturer.
                                    </p>
                                    <p>
                                        <strong style={{color:"#56465E"}}>AC Jet Wash: </strong>AC Jet Wash offers detailed cleaning of the indoor and outdoor units with Jet Wash Machine including minor problem-fixing (excluding materials and parts). The service charge varies on your AC amount, height, weight, and difficulties. 
                                    </p>
                                    <p>
                                        <strong style={{color:"#56465E"}}>AC Dismantling: </strong>This service offers dismantling AC from home or workplace and disconnecting all the electrical wiring from the AC unit. 
                                    </p>
                                    <p>
                                        <strong style={{color:"#56465E"}}>AC Capacitor Replacement: </strong>This service offers to replace the AC capacitor with a new one. Capacitor price and warranty differ as per manufacturer. 
                                    </p>
                                    <p>
                                        <strong style={{color:"#56465E"}}>AC Circuit Repairing: </strong>This service offers to repair the circuits of your AC. Circuit box price and warranty differ as per manufacturer.
                                    </p>
                                    <p>
                                        <strong style={{color:"#56465E"}}>Special Corporate Ac Service: </strong>This service offer you dedicated key account manager for your massive corporate ac solution.
                                    </p>
                                    <h3>Why Us ?</h3>
                                    <p>
                                        <strong style={{color:"#56465E"}}>Hassle-Free: </strong>Ordering AC repair service from us is simple and easy. You can hire expert Service Providers from us hassle-free to carry your AC here and there. Our Service Provider will come to your doorstep for you.  
                                    </p>
                                    <p>
                                        <strong style={{color:"#56465E"}}>Budget-Friendly: </strong>You can hire a professional AC repair service in the same budget or less than any other local services near you. Our Service Providers will provide expert AC technicians to inspect problems and fix them.
                                    </p>
                                    <p>
                                        <strong style={{color:"#56465E"}}>Well-trained Professionals: </strong>Our professional Service Providers have discreet and skilled AC repair technicians. Their backgrounds are thoroughly checked in detail. Safety Assurance: Our service providers offer a safe AC repairing service for you. This means they will handle repairs with care.
                                    </p>
                                    <h2 style={{marginTop:"15px"}}>Pricing <FontAwesomeIcon style={{fontSize:"20px"}} icon={faArrowRight} /></h2>
                                    <p style={{padding:"0px",margin:"0px"}}>
                                    You only have to pay the service charge including materials/parts cost if taken using cost will have to pay if no service is avail payment.
                                    </p>
                                    <p>
                                    After service completion you will receive a text message on your mobile from BD Service Point then you have to pay through Online or Cash on Delivery. 
                                    </p>
                                    <h2 style={{marginTop:"15px"}}>Liability <FontAwesomeIcon style={{fontSize:"20px"}} icon={faArrowRight} /></h2>
                                    <p>
                                    BD Service Point will not be liable for any pre-existing issues or potential risks reported by the technician but not handled due to the customer’s refusal to repair.
                                    </p>
                                    <h2 style={{marginTop:"15px"}}>Night Service: 10 pm to 8 am</h2>
                                    <ul style={{fontSize:"18px"}}>
                                        <li>
                                            Night service starts from 10:00 pm to 8:00 am.
                                        </li>
                                        <li>
                                            Minimum 4 Hours Lead time after service booking
                                        </li>
                                        <li>
                                            In excess of BDT 500 will be charged as Emergency Support Service Charge.
                                        </li>
                                        <li>
                                            If for any reason the customer refuses to take service after order confirmation, only the Emergency Support Service Charge will be applicable.
                                        </li>
                                        <li>
                                            BD Service Point will not liable for any direct or incidental loss/damage of the client’s property or personal security during availing of the service, caused by accident, theft, burglary, or any other type of incidental damages.
                                        </li>
                                        <li>
                                            The client is singularly responsible for monitoring, using, and supervising the activities provided by Service providers.
                                        </li>
                                        <li>
                                            By availing the service, clients automatically discharge BD Service Point from any claims or legal/moral liabilities other than stated in the Terms of service specified by BD Service Point.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div style={{border:"1px solid #5C636A"}}></div>



            <div className='container'>
                <FAQs faqDetail={data.data} />
            </div>

            {/* Scroll To Top */}
            <ScrollToTop />

        </section>
    )
  }
}

export default connect(mapStateToProps)(DetailView);
