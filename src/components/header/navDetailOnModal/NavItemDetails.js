import React, { Component } from 'react';
import './NavItemDetails.css';
import { Modal, ModalBody } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

class NavItemDetails extends Component {
    constructor(props){
        super(props);
    }
  
  render(){

    const items = this.props.item.map((item, index)=>{
        return(
            <div key={index} className='serviceContent'>
                <h5>{item.title}</h5>
                <ul>
                    {
                        item.services.map((subItem, j)=>{
                            return(
                                <li key={j}>{subItem.title}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    })

    return (
        <Modal isOpen={this.props.isModalOpen} toggle={this.props.detailsModalToggle} fullscreen>
            <div style={{paddingLeft:"0", marginRight:"0", height:"50px", color:`${this.props.modalBottomColor}`, background:`${this.props.modalTopColor}`}}>
                <div className='container'>
                    <h5 style={{float:"left", paddingTop:"10px"}}>LOGO</h5>
                    <FontAwesomeIcon icon={faXmark} onClick={this.props.detailsModalToggle}
                        style={{
                            float:"right", 
                            fontSize:"30px",
                            paddingTop:"10px",
                            cursor:"pointer"
                        }}
                     />
                </div>
            </div>
            <ModalBody style={{background:`${this.props.modalBottomColor}`, color:`${this.props.modalTopColor}`}}>
                <div className='container'>
                    {items}
                </div>
            </ModalBody>
        </Modal>
      );
  }
}

export default NavItemDetails;