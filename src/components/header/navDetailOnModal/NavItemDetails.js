import React from 'react';
import './NavItemDetails.css';
import { Modal, ModalBody } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { detailView } from "../../../redux/actionCreators";

const NavItemDetails = props => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const details = (parentId, childId) =>{
        // localStorage.removeItem('item');
        props.detailsModalToggle();
        dispatch(detailView(parentId, childId));
        navigate("/details");
      }


    const items = props.item.map((item, index)=>{
        return(
            <div key={index} className='serviceContent'>
                <h5>{item.title}</h5>
                <ul>
                    {
                        item.services.map((subItem, j)=>{
                            // console.log(item.id, subItem.id);
                            return(
                                <li key={j} onClick={()=>details(item.id, subItem.id)}>{subItem.title}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    })

    return (
        <Modal isOpen={props.isModalOpen} toggle={props.detailsModalToggle} fullscreen>
            <div style={{paddingLeft:"0", marginRight:"0", height:"50px", color:`${props.modalBottomColor}`, background:`${props.modalTopColor}`}}>
                <div className='container'>
                    <h5 style={{float:"left", paddingTop:"10px"}}>LOGO</h5>
                    <FontAwesomeIcon icon={faXmark} onClick={props.detailsModalToggle}
                        style={{
                            float:"right", 
                            fontSize:"30px",
                            paddingTop:"10px",
                            cursor:"pointer"
                        }}
                     />
                </div>
            </div>
            <ModalBody style={{background:`${props.modalBottomColor}`, color:`${props.modalTopColor}`}}>
                <div className='container'>
                    {items}
                </div>
            </ModalBody>
        </Modal>
    );
}


export default NavItemDetails;