import React, { Component } from 'react';
import './NavItemDetails.css';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

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
            <div className='container'>
                <ModalHeader 
                    style={{paddingLeft:"0", marginRight:"0", background:"#fff"}} 
                    toggle={this.props.detailsModalToggle}
                >
                    LOGO
                </ModalHeader>
            </div>
            <ModalBody style={{background:"#000000", color:"white"}}>
                <div className='container'>
                    {items}
                </div>
            </ModalBody>
        </Modal>
      );
  }
}

export default NavItemDetails;