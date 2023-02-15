import React, { Component } from 'react';
import { connect } from 'react-redux';


import { Modal, ModalHeader, ModalBody } from 'reactstrap';
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

import Signup from '../../auth/Signup';
import Login from '../../auth/Login';
import NavItemDetails from './navDetailOnModal/NavItemDetails';



const mapState = state =>{
    // console.log("Glogal State: ", state);
    return{
        navMenuItem: state,
    }
}


class Header extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            signupModal: false,
            loginModal: false,
            detailsModal: false,
            scrolled: false,
        }
    }


    signupToggle = () =>{
        this.setState({
            signupModal: !this.state.signupModal,
        });
    }

    loginToggle = () =>{
        this.setState({
            loginModal: !this.state.loginModal,
        });
    }

    detailsModalToggle = () =>{
        if(window.pageYOffset > 0){
            this.setState({
                scrolled: !this.state.scrolled,
                detailsModal: !this.state.detailsModal,
            });
        } else {
            this.setState({detailsModal: !this.state.detailsModal});
        }
    }

    handleScroll = () =>{
        if(window.pageYOffset > 0){
            this.setState({"scrolled": true})
        } else {
            this.setState({"scrolled": false})
        }
    }



    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount(){
        window.removeEventListener("scroll", this.handleScroll);
    }



    render(){

        const scrolled = this.state.scrolled;

        return (
        
            <header>

                {/* Top Navbar */}
                <section className="navTop" 
                    style={{
                        marginBottom: scrolled ? "60px" : "0px",
                        borderBottom:"1px solid #CD3932"
                    }}
                >
                    <div className="container">
                        <div className='row'>
                            
                            <div className='col-md-6 col-sx-12'>
                                <div className='col-sm-3'>
                                    <ul className='navTopIconList'>
                                        <li>
                                            <Link className='fb' to={"#"}>
                                                <FontAwesomeIcon icon={faFacebookF} />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className='in' to={"#"}>
                                                <FontAwesomeIcon icon={faLinkedinIn} />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className='tw' to={"#"}>
                                                <FontAwesomeIcon icon={faTwitter} />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className='pt' to={"#"}>
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
                                    <li onClick={this.loginToggle} style={{cursor:"pointer"}}>
                                        Login
                                    </li>
                                    <li style={{paddingTop:"15px"}}>|</li>
                                    <li onClick={this.signupToggle} style={{paddingRight:"0",cursor:"pointer"}}>
                                        Signup
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
    
    
                {/* Bottom Navbar */}
                <section>
                    <div className="navBottom" 
                        style={{
                            display: "flex",
                            zIndex: 9999,
                            top: scrolled ? 0 : 30,
                            position: scrolled ? "fixed" : "initial",
                            background: scrolled ? "#775218" : "#fff",
                            color: scrolled ? "#fff" : "#212529",
                        }}
                    >
                        <div className="container">
                            <div className='row'>
                                <div className='col-sm-6 col-md-6'>
                                    <div className='navBottomLeft'>
                                        <a className="navbar-brand" href="#">LOGO</a>
                                    </div>
                                </div>
                                <div className='col-sm-6 col-md-6'>
                                    <div className='navBottomRight'>
                                        <FontAwesomeIcon 
                                            icon={faBars} 
                                            style={{cursor:"pointer"}}
                                            onClick={this.detailsModalToggle}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    
    

                {/* Signup and Login Modals */}
                <section>
                    <Modal size='md' isOpen={this.state.signupModal}>
                        <ModalHeader toggle={this.signupToggle}>Register</ModalHeader>
                        <ModalBody>
                            <Signup />
                        </ModalBody>
                    </Modal>
                </section>

                <section>
                    <Modal size='md' isOpen={this.state.loginModal}>
                        <ModalHeader toggle={this.loginToggle}>Login</ModalHeader>
                        <ModalBody>
                            <Login />
                        </ModalBody>
                    </Modal>
                </section>


                {/* Bottom Navbar Details */}
                <section>
                    <NavItemDetails 
                        item={this.props.navMenuItem}
                        detailsModalToggle={this.detailsModalToggle} 
                        isModalOpen={this.state.detailsModal}
                    />
                </section>

    
            </header>
    
        );
    }
}

export default connect(mapState)(Header);