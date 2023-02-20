import React, { Component } from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import './ContactUs.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

class ContactUs extends Component {
  render() {
    return (
      <section style={{paddingTop:"30px",marginBottom:"30px",background: "#F5F5F5"}}>
        <div className='container' style={{background:"#fff",padding:"20px"}}>
            <div className='row'>

                <div className='col-md-6'>
                    <h4 style={{color:"#003366"}}>Contact/Enquiry Form</h4>
                    <p>Dear User, please provide the details below for any favourable suggestion or query to us.</p>
                    <div>
                        <Form className='contact-form'>
                            <FormGroup>
                                <Input
                                    name="contactName"
                                    placeholder="Name"
                                    type="text"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    name="contactEmail"
                                    placeholder="Email"
                                    type="email"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    name="contactPhone"
                                    placeholder="Phone Number"
                                    type="text"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    name="contactAddress"
                                    placeholder="Address"
                                    type="text"
                                />
                            </FormGroup>
                            {' '}
                            <FormGroup>
                                <Input
                                    name="contactTextArea"
                                    placeholder="Your Message"
                                    type="textarea"
                                    style={{height:"140px"}}
                                />
                            </FormGroup>
                            {' '}
                            <Button type='submit'>
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>

                <div className='col-md-6'>
                    <h4 style={{color:"#003366"}}>Get in touch</h4>
                    <p>
                        Dear user, if you have much query or suggestion, 
                        you can ping us on Whatsapp or you can also ring us at our 
                        Toll free number which is listed below. 
                        We will also warmly welcome you on address given below.
                    </p>
                    <div className='contact-right'>
                        <p><FontAwesomeIcon className='icon' icon={faLocationDot} /> Nikunja-2, Khelkeht, Dhaka</p>
                        <p><FontAwesomeIcon className='icon' icon={faPhone} /> +91-9311520018</p>
                        <p><FontAwesomeIcon className='icon' style={{color:"#0E9805"}} icon={faWhatsapp} /> +91-9311520018</p>
                        <p><FontAwesomeIcon className='icon' icon={faEnvelope} /> abc@gmail.com</p>
                    </div>
                </div>
                
            </div>
        </div>
      </section>
    )
  }
}

export default ContactUs;
