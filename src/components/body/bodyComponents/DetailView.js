import React, { Component } from 'react';
// import {connect} from 'react-redux';
import './DetailView.css';

import { Card, CardImg } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBangladeshiTakaSign, faCaretRight, faCheck } from '@fortawesome/free-solid-svg-icons';




class DetailView extends Component {
    constructor(props){
        super(props);
    }


  render() {

    const item = localStorage.getItem("item");

    return (
        <section style={{paddingTop:"20px",borderTop:"1px solid rgb(205, 57, 50)"}}>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                    <h2 style={{color:"#1C2E3D"}}>{item}</h2>
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
                        <h2 style={{color:"#1C2E3D"}}>
                            Service Charge : 
                            <span style={{fontSize:28}}> <FontAwesomeIcon icon={faBangladeshiTakaSign} /> 350</span>
                        </h2>
                        <div style={{width:"102px", margin:"0px 0px 1px 5px", borderBottom:"1px solid #FC5C18"}}>
                            <p style={{marginBottom:"-2px", color:"#FC5C18"}}>View Price List</p>
                        </div>
                        <div className='visit-summary'>
                            <strong>Go Cashless</strong>
                            <p>Pay Online after your service PayTm and other</p>
                            <strong>Professionals</strong>
                            <p>Inhouse Verified and Trained Professionals</p>
                            <strong>Insurance</strong>
                            <p>Upto Rs 5000 against damages</p>
                            <p style={{marginTop:"-4px"}}>AMC Available</p>
                            <strong>Service Guarantee</strong>
                            <p>Service Guarantee Upto 365 Days of Service*(AMC)</p>
                        </div>
                        <br />
                        <input type="button" value="BOOK" className='book-button' />
                        <ul style={{marginTop:"5px"}}>
                            <li>
                                <FontAwesomeIcon icon={faBangladeshiTakaSign} style={{fontSize:"13px"}} /> Cash on Delivery Available <FontAwesomeIcon icon={faCheck} style={{fontSize:"15px", fontWeight:777}} />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='row' style={{marginTop:"30px"}}>
                    <div className='col-md-11 col-sm-12'>
                        <p>
                            Time is Money and everyone is busy to convert it. 
                            Behalf of this quotation, technology brings us in a phase where money is used to save our times by invention of so many house holding appliances.
                            Microwave oven is one of those appliances which are tech-born and used in most of the homes in kitchen section. Oven is used to bake the food.
                            But it also suffers hiccups like other electronic devices.
                        </p>
                    </div>
                </div>
                <div className='row' style={{marginTop:"20px"}}>
                    <h3 style={{fontWeight:"bold",color:"#1C2E3D"}}>Cases When you need an expert!</h3>
                    <div className='col-md-11 col-sm-12'>
                        <ul style={{fontSize:"16px",lineHeight:"20px", listStyle:"none", paddingLeft:"15px"}}>
                            <li><FontAwesomeIcon icon={faCaretRight} /> You are baking your pre-processed food but it takes long time to bake them properly.</li>
                            <li><FontAwesomeIcon icon={faCaretRight} /> Power button doesn't respond smoothly.</li>
                            <li><FontAwesomeIcon icon={faCaretRight} /> Oven started over heating during function.</li>
                            <li><FontAwesomeIcon icon={faCaretRight} /> Your noodles got burnt or spongy when you cooked it into your oven.</li>
                            <li><FontAwesomeIcon icon={faCaretRight} /> Short-circuits happen sometime due voltage fluctuation force you to hire a microwave expert.</li>
                        </ul>
                        <div className='order-cases-bottom'>
                            <p>So many other reasons may possible to look a microwave expert. You probably do not think to waste your time in your busy schedule, so what to do now?</p>
                            <p>
                                Leave all the tension in your dustbin and book Microwave repairing services at <strong>servicepointbd.com</strong>.
                                We are trustworthy and expert in serving best quality services.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='row' style={{marginTop:"30px"}}>
                    <h3 style={{fontWeight:"bold",color:"#1C2E3D"}}>Services under Microwave repairing</h3>
                    <div className='col-md-11 col-sm-12'>
                        <p>We have huge list of prescription for your gadgets illness. Some are following,</p>
                        <div className='row different-services'>
                            <div className='col-sm-12 col-md-4 service-col'>
                                <p>Magnetron repairing and replacement</p>
                                <p>Cabinet changing</p>
                                <p>Cover repair</p>
                            </div>
                            <div className='col-sm-12 col-md-4 service-col'>
                                <p>Magnetron repairing and replacement</p>
                                <p>Cabinet changing</p>
                            </div>
                            <div className='col-sm-12 col-md-4 service-col'>
                                <p>Magnetron repairing and replacement</p>
                                <p>Cabinet changing</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='row' style={{marginTop:"30px"}}>
                    <h3 style={{fontWeight:"bold",color:"#1C2E3D"}}>FAQs</h3>
                    <div className='col-md-11 col-sm-12'>
                        <div className='qs-ans'>
                            <p><strong>Q1 : </strong> What to do when short circuit happens?</p>
                            <p><strong>Answer </strong><FontAwesomeIcon icon={faArrowRight} /> Don't be panic, stay calm and put the MCB off ASAP, and wait for technician. </p>
                        </div>
                        <div className='qs-ans'>
                            <p><strong>Q2 : </strong> How we book your service?</p>
                            <p><strong>Answer </strong><FontAwesomeIcon icon={faArrowRight} /> To hire our services please login to ezHomeservices.in and book your required services thoroughly along with filling your details For more query you may catch us on or toll free number. </p>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
  }
}

export default DetailView;
