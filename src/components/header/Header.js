import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faFacebookF, 
    faLinkedinIn, 
    faTwitter, 
    faPinterestP, 
    faWhatsapp, 
} from '@fortawesome/free-brands-svg-icons';
import { faPhone, faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { Link } from 'react-router-dom';

// import Signup from '../../auth/Signup';


class Header extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            modal: false,
        }
    }


    toggle = () =>{
        this.setState({
            modal: !this.state.modal,
        });
    }



    render(){


        return (
        
            <header>
                <section className="navTop">
                    <div className="container">
                        <div className='row'>
                            
                            <div className='col-md-6 col-sx-12'>
                                <div className='col-sm-3'>
                                    <ul className='navTopIconList'>
                                        <li>
                                            <Link to={"#"}>
                                                <FontAwesomeIcon icon={faFacebookF} />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"#"}>
                                                <FontAwesomeIcon icon={faLinkedinIn} />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"#"}>
                                                <FontAwesomeIcon icon={faTwitter} />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"#"}>
                                                <FontAwesomeIcon icon={faPinterestP} />
                                            </Link>
                                        </li>
                                        <li style={{paddingTop:"15px"}}>|</li>
                                    </ul>
                                </div>
                                <div className='col-sm-9'>
                                    <div className='navTopContact'>
                                        <span>
                                            <Link to={"#"} style={{fontSize:"14px", color:"#3C5A9B"}}><FontAwesomeIcon icon={faPhone} /></Link>
                                        </span>
                                        <span>01846867388</span>
                                        <span>
                                            <Link to={"#"} style={{fontSize:"16px",backgroundColor:"inherit", color:"#0E9805"}}>
                                                <FontAwesomeIcon icon={faWhatsapp} />
                                            </Link>
                                        </span>
                                        <span>01846867388</span>
                                    </div>
                                </div>
                            </div>
    
                            
                            <div className='col-md-6 col-sx-12'>
                                <ul className='navTopRight'>
                                    <li style={{cursor:"pointer"}}>
                                        Login
                                    </li>
                                    <li style={{paddingTop:"15px"}}>|</li>
                                    <li onClick={this.toggle} style={{paddingRight:"0",cursor:"pointer"}}>
                                        Signup
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
    
    
                <section>
                    <div className="navBottom">
                        <div className="container">
                            <div className='row'>
                                <div className='col-sm-6 col-md-6'>
                                    <div className='navBottomLeft'>
                                        <a className="navbar-brand" href="#">Navbar</a>
                                    </div>
                                </div>
                                <div className='col-sm-6 col-md-6'>
                                    <div className='navBottomRight'>
                                        <FontAwesomeIcon icon={faBars} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    
    
                <section>
                    <Modal size='md' isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>Register</ModalHeader>
                        <ModalBody>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>
                                Do Something
                            </Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </Modal>
                </section>


                {/* {this.state.isSigned ? <Signup /> : null} */}
    
            </header>
    
    
        
    
        );
    }
}

export default Header;