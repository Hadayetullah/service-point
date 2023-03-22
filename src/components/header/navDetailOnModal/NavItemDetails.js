import React from "react";
import { Modal, ModalBody } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { detailView } from "../../../redux/actionCreators";
import NavItemDetailsTooltip from "./NavItemDetailsTooltip";

import "./NavItemDetails.css";

const NavItemDetails = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const details = (parentId, childId, componentName) => {
    if (componentName !== null) {
      props.detailsModalToggle();
      dispatch(detailView(parentId, childId));
      navigate("/details");
    }
  };

  const items = props.item.serviceDetailsData.map((item, index) => {
    return (
      <div key={index} className="serviceContent">
        <h5>{item.title}</h5>
        <ul>
          {item.services.map((subItem, j) => {
            return (
              <NavItemDetailsTooltip
                key={j}
                pid={item.id}
                child={subItem}
                details={details}
                modalTopColor={props.modalTopColor}
                modalBottomColor={props.modalBottomColor}
              />
            );
          })}
        </ul>
      </div>
    );
  });

  return (
    <Modal
      isOpen={props.isModalOpen}
      toggle={props.detailsModalToggle}
      fullscreen
    >
      <div
        style={{
          paddingLeft: "0",
          marginRight: "0",
          height: "50px",
          color: `${props.modalBottomColor}`,
          background: `${props.modalTopColor}`,
        }}
      >
        <div className="container">
          <Link
            to="/"
            onClick={props.detailsModalToggle}
            style={{
              float: "left",
              paddingTop: "10px",
              textDecoration: "none",
              color: `${props.modalBottomColor}`,
            }}
          >
            <h5>LOGO</h5>
          </Link>
          {/* <h5 style={{float:"left", paddingTop:"10px"}}>
                        <Link style={{textDecoration:"none", color:"#000"}} to={"/"}>LOGO</Link>
                    </h5> */}
          <FontAwesomeIcon
            icon={faXmark}
            onClick={props.detailsModalToggle}
            style={{
              float: "right",
              fontSize: "30px",
              paddingTop: "10px",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
      <ModalBody
        style={{
          background: `${props.modalBottomColor}`,
          color: `${props.modalTopColor}`,
        }}
      >
        <div className="container">{items}</div>
      </ModalBody>
    </Modal>
  );
};

export default NavItemDetails;
