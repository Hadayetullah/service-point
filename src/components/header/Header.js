import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import {
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
  PopoverItem,
} from "reactstrap";
import "./Header.css";

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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faPinterestP,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faBars,
  faCircleUser,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import Signup from "../auth/Signup";
import Login from "../auth/Login";
import ChangePassword from "../auth/ChangePassword";
import NavItemDetails from "./navDetailOnModal/NavItemDetails";
// import {detailView} from '../../redux/actionCreators';

const mapStateToProps = (state) => {
  // console.log("Glogal State: ", state);
  return {
    navMenuItem: state.galleryItems,
    // isUpdated: state.serviceDetails.isUpdated,
  };
};
// const mapDispatchToProps = dispatch =>{
//     return{
//         viewDetail: (parentId, childId) => dispatch(detailView(parentId, childId)),
//     }
// }

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
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
      changePassword: false,
    };
  }

  signupToggle = () => {
    this.setState({
      signupModal: !this.state.signupModal,
    });
  };

  loginToggle = () => {
    this.setState({
      loginModal: !this.state.loginModal,
    });
  };

  changePasswordToggle = () => {
    this.setState({
      changePassword: !this.state.changePassword,
    });
  };

  detailsModalToggle = () => {
    if (window.pageYOffset > 0) {
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
  };

  handleScroll = () => {
    if (window.pageYOffset > 0) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  toggleNavbar = () => this.setState({ isOpen: !this.state.isOpen });

  responsiveNav = () => {
    if (window.innerWidth < 768) {
      this.setState({
        isToggolerOnNav: false,
        isResponsive: true,
      });
    } else {
      this.setState({
        isToggolerOnNav: true,
        isResponsive: false,
      });
    }
    // console.log(window.innerWidth);
  };

  // viewDetail = (parentId, childId) =>{
  //     // console.log(parentId, childId);
  //     this.props.viewDetail(parentId, childId);
  //     // this.detailsModalToggle();
  //     // return <Navigate to="/details" />;

  // }

  componentDidMount() {
    this.responsiveNav();
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.responsiveNav);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.responsiveNav);
  }

  render() {
    // console.log(this.props.isUpdated);

    const { scrolled, zIndex, isResponsive } = this.state;

    const authenticatedNavTopRight = (
      <ul className="navTopRight">
        <li>Logout</li>
        <li>|</li>
        <li>
          <span id="OnpopUserMenu">
            <FontAwesomeIcon icon={faCircleUser} />
          </span>
          <UncontrolledPopover
            target="OnpopUserMenu"
            placement="top"
            className="user-popover"
            style={{ background: "#9AAFEB" }}
          >
            <PopoverHeader>
              <div>
                <span style={{ marginLeft: "38px", fontSize: "155px" }}>
                  <FontAwesomeIcon icon={faUser} />
                </span>
              </div>
              <h5 style={{ textAlign: "center" }}>Md. Hadayetullah</h5>
            </PopoverHeader>
            <PopoverBody>
              <div style={{ marginBottom: "0px" }}>
                <p style={{ padding: "0", margin: "0" }}>Phone: 01735848465</p>
                <p style={{ padding: "0", margin: "0" }}>
                  Email: amanprince606@gmail.com
                </p>
                <hr />
                <Button style={{ width: "100%", marginBottom: "10px" }}>
                  MY Offers
                </Button>
                <Button style={{ width: "100%", marginBottom: "10px" }}>
                  Recent Services
                </Button>
                <Button style={{ width: "100%", marginBottom: "10px" }}>
                  My Pending Servises
                </Button>
                <hr />
                <Button
                  onClick={this.changePasswordToggle}
                  style={{ marginRight: "5px" }}
                >
                  Change Password
                </Button>
                <Button>Logout</Button>
              </div>
            </PopoverBody>
          </UncontrolledPopover>
        </li>
      </ul>
    );

    const notAuthenticatedNavTopRight = (
      <ul className="navTopRight">
        <li onClick={this.loginToggle} style={{ cursor: "pointer" }}>
          Login
        </li>
        <li style={{ paddingTop: "15px" }}>|</li>
        <li
          onClick={this.signupToggle}
          style={{ paddingRight: "0", cursor: "pointer" }}
        >
          Signup
        </li>
      </ul>
    );

    return (
      <header>
        {/* Top Navbar */}
        <section
          className="navTop"
          style={{
            marginBottom: scrolled ? "60px" : "0px",
            borderBottom: "1px solid #CD3932",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-9 nav-top-left">
                <div className="col-sm-3 nav-top-left-icons">
                  <ul className="navTopIconList">
                    <li>
                      <Link className="fb" to={"#"}>
                        <FontAwesomeIcon icon={faFacebookF} />
                      </Link>
                    </li>
                    <li>
                      <Link className="in" to={"#"}>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </Link>
                    </li>
                    <li>
                      <Link className="tw" to={"#"}>
                        <FontAwesomeIcon icon={faTwitter} />
                      </Link>
                    </li>
                    <li>
                      <Link className="pt" to={"#"}>
                        <FontAwesomeIcon icon={faPinterestP} />
                      </Link>
                    </li>
                    <li style={{ fontSize: "17px", paddingTop: "16px" }}>|</li>
                  </ul>
                </div>
                <div className="col-sm-9 col-xs-12">
                  <div className="navTopContact">
                    <span>
                      <Link to={"#"} className="nav-top-phone">
                        <FontAwesomeIcon icon={faPhone} />
                      </Link>
                    </span>
                    <span>01846867388</span>
                    <span>
                      <Link to={"#"} className="nav-top-whatsapp">
                        <FontAwesomeIcon icon={faWhatsapp} />
                      </Link>
                    </span>
                    <span>01846867388</span>
                  </div>
                </div>
              </div>

              <div className="col-md-3 nav-top-right">
                {/* {notAuthenticatedNavTopRight} */}
                {authenticatedNavTopRight}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Navbar */}
        <section
          style={{
            width: "100%",
            // display: "flex",
            zIndex: zIndex,
            top: scrolled ? 0 : 30,
            position: scrolled ? "fixed" : "initial",
            background: scrolled ? "#1C2E3D" : "#fff",
            borderBottom: "1px solid #CD3932",
            // color: scrolled ? "#fff" : "#212529",
          }}
        >
          <Navbar expand={"md"} container={true}>
            <NavbarBrand
              style={{ color: scrolled ? "#fff" : "#212529" }}
              href="/"
            >
              LOGO
            </NavbarBrand>
            <NavbarToggler
              className="modal-icon-responsive"
              onClick={this.toggleNavbar}
            >
              <FontAwesomeIcon
                icon={faBars}
                style={{ color: scrolled ? "#fff" : "#355875" }}
              />
            </NavbarToggler>
            {/* <NavbarToggler className='modal-icon' /> */}
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav
                className="me-auto"
                navbar
                style={{
                  visibility: scrolled
                    ? "visible"
                    : isResponsive
                    ? "visible"
                    : "hidden",
                }}
              >
                <NavItem>
                  <NavLink
                    className="NavLink"
                    style={{ color: scrolled ? "#fff" : "#212529" }}
                    to="/about-us"
                  >
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="NavLink"
                    style={{ color: scrolled ? "#fff" : "#212529" }}
                    to="/contact-us"
                  >
                    Contact Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="NavLink"
                    style={{ color: scrolled ? "#fff" : "#212529" }}
                    to="/privacy"
                  >
                    Privacy &#38; Policy
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="NavLink"
                    style={{ color: scrolled ? "#fff" : "#212529" }}
                    to="/terms-of-use"
                  >
                    Terms &#38; Condition
                  </NavLink>
                </NavItem>
                {/* <NavItem>
                                    <Link href="https://github.com/reactstrap/reactstrap">
                                        GitHub
                                    </Link>
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
              <hr style={{ marginRight: "-120px" }} />
              {this.state.isToggolerOnNav ? (
                <NavbarToggler
                  className="modal-icon"
                  onClick={this.detailsModalToggle}
                >
                  <FontAwesomeIcon
                    icon={faBars}
                    style={{ color: scrolled ? "#fff" : "#212529" }}
                  />
                </NavbarToggler>
              ) : (
                <Button
                  style={{ fontSize: "17px", fontWeight: "bold" }}
                  onClick={this.detailsModalToggle}
                >
                  Visit All Servies
                </Button>
              )}
              {/* <NavbarToggler className='modal-icon' /> */}
            </Collapse>
          </Navbar>
        </section>

        {/* Signup, Login, Change-Password Modals */}
        <section>
          <Modal
            size="md"
            className="signupModal"
            isOpen={this.state.signupModal}
          >
            <ModalHeader toggle={this.signupToggle}>Register</ModalHeader>
            <ModalBody>
              <Signup />
            </ModalBody>
          </Modal>
        </section>

        <section>
          <Modal size="md" isOpen={this.state.loginModal}>
            <ModalHeader toggle={this.loginToggle}>Login</ModalHeader>
            <ModalBody>
              <Login />
            </ModalBody>
          </Modal>
        </section>
        <section>
          <Modal size="md" isOpen={this.state.changePassword}>
            <ModalHeader toggle={this.changePasswordToggle}>
              Change Password
            </ModalHeader>
            <ModalBody>
              <ChangePassword />
            </ModalBody>
          </Modal>
        </section>

        {/* Bottom Navbar Details */}
        <section>
          <NavItemDetails
            // viewDetail={this.viewDetail}
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
