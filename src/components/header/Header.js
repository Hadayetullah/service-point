import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';


import {
    Modal, 
    ModalHeader, 
    ModalBody,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button
  } from 'reactstrap';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faFacebookF, 
    faLinkedinIn, 
    faTwitter, 
    faPinterestP, 
    faWhatsapp, 
} from '@fortawesome/free-brands-svg-icons';
import { faPhone, faBars } from '@fortawesome/free-solid-svg-icons';


import Signup from '../../auth/Signup';
import Login from '../../auth/Login';
import NavItemDetails from './navDetailOnModal/NavItemDetails';



const mapStateToProps = state =>{
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
            isOpen: false,
            isToggolerOnNav: true,
            modalTopColor: "#fff",
            modalBottomColor: "#1C2E3D",
            zIndex: 9999,
            isResponsive: false,
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
                modalTopColor: "#1C2E3D",
                modalBottomColor: "#fff",
                zIndex: 1,
                detailsModal: !this.state.detailsModal,
            });
        } else {
            this.setState({
                modalTopColor: "#fff",
                modalBottomColor: "#1C2E3D",
                zIndex: 9999,
                detailsModal: !this.state.detailsModal,
            });
        }
    }

    handleScroll = () =>{
        if(window.pageYOffset > 0){
            this.setState({scrolled: true})
        } else {
            this.setState({scrolled: false})
        }
    }

    toggleNavbar = () => this.setState({isOpen: !this.state.isOpen});

    responsiveNav = () =>{
        if(window.innerWidth < 768){
            this.setState({
                isToggolerOnNav: false,
                isResponsive: true,
            })
        } else {
            this.setState({
                isToggolerOnNav: true,
                isResponsive: false,
            })
        }
        // console.log(window.innerWidth);
    }





    componentDidMount(){
        this.responsiveNav();
        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener("resize", this.responsiveNav);
    }
    componentWillUnmount(){
        window.removeEventListener("scroll", this.handleScroll);
        window.removeEventListener("resize", this.responsiveNav);
    }





    render(){

        console.log(this.state.scrolled);

        const {scrolled, zIndex, isResponsive } = this.state;

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
                {/* <section>
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
                </section> */}




                {/* Navbar */}
                <section
                    style={{
                        width: "100%",
                        borderTop:"1px solid #CD3932",
                        // display: "flex",
                        zIndex: zIndex,
                        top: scrolled ? 0 : 30,
                        position: scrolled ? "fixed" : "initial",
                        background: scrolled ? "#1C2E3D" : "#fff",
                        // color: scrolled ? "#fff" : "#212529",
                    }}
                >
                    <Navbar expand={"md"} container={true}>
                        <NavbarBrand style={{color: scrolled ? "#fff" : "#212529",}} href="/">LOGO</NavbarBrand>
                        <NavbarToggler 
                            className='modal-icon-responsive'
                            onClick={this.toggleNavbar}
                        >
                            <FontAwesomeIcon icon={faBars} style={{color: scrolled ? "#fff" : "#212529",}} />
                        </NavbarToggler>
                        {/* <NavbarToggler className='modal-icon' /> */}
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="me-auto" navbar style={{visibility: scrolled ? "visible" : (isResponsive ? "visible" : "hidden"),}}>
                                <NavItem>
                                    <NavLink style={{color: scrolled ? "#fff" : "#212529",}} href="#">About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={{color: scrolled ? "#fff" : "#212529",}} href="#">Contact Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={{color: scrolled ? "#fff" : "#212529",}} href="#">Privacy &#38; Policy</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={{color: scrolled ? "#fff" : "#212529",}} href="#">Terms &#38; Condition</NavLink>
                                </NavItem>
                                {/* <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap">
                                        GitHub
                                    </NavLink>
                                </NavItem> */}
                                {/* <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Options
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>Option 1</DropdownItem>
                                        <DropdownItem>Option 2</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Reset</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown> */}
                            </Nav>
                            {/* <NavbarText>Simple Text</NavbarText> */}
                            {/* <NavbarText>767</NavbarText> */}
                            <hr style={{marginRight:"-120px"}} />
                            {
                                this.state.isToggolerOnNav
                                ?
                                (
                                    <NavbarToggler 
                                        className='modal-icon'
                                        onClick={this.detailsModalToggle}
                                    >
                                        <FontAwesomeIcon icon={faBars} style={{color: scrolled ? "#fff" : "#212529",}} />
                                    </NavbarToggler>
                                )
                                :
                                (
                                    <Button style={{fontSize:"17px", fontWeight:"bold"}} onClick={this.detailsModalToggle}>Visit All Servies</Button>
                                )
                            }
                            {/* <NavbarToggler className='modal-icon' /> */}
                        </Collapse>
                    </Navbar>
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
                        modalTopColor={this.state.modalTopColor}
                        modalBottomColor={this.state.modalBottomColor}
                    />
                </section>

    
            </header>
    
        );
    }
}

export default connect(mapStateToProps)(Header);