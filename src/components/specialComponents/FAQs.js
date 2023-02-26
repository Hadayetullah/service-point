import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCirclePlus, faPersonCircleQuestion } from '@fortawesome/free-solid-svg-icons';


import './FAQs.css';


const FAQs = () => {
  return (
    <div className='faq'>
        <h2 style={{marginTop:"15px"}}><FontAwesomeIcon icon={faPersonCircleQuestion} /> FAQs <FontAwesomeIcon style={{fontSize:"20px"}} icon={faArrowRight} /></h2>
        <div className='faq-icon'>
            <span><FontAwesomeIcon icon={faCirclePlus} /></span>
            <h6>Do I have to pay any charge if I don’t take any service?</h6>
        </div>
        <div className='faq-icon'>
            <span><FontAwesomeIcon icon={faCirclePlus} /></span>
            <h6>Do I have to pay advance money before availing your service?</h6>
        </div>
        <div className='faq-icon'>
            <span><FontAwesomeIcon icon={faCirclePlus} /></span>
            <h6>Is this only for household AC?</h6>
        </div>
        <div className='faq-icon'>
            <span><FontAwesomeIcon icon={faCirclePlus} /></span>
            <h6>What if they damage my AC?</h6>
        </div>
        <div className='faq-icon'>
            <span><FontAwesomeIcon icon={faCirclePlus} /></span>
            <h6>Do you give Materials/Parts warranty?</h6>
        </div>
        <div className='faq-icon'>
            <span><FontAwesomeIcon icon={faCirclePlus} /></span>
            <h6>Can I buy AC materials/parts by myself and ask your technician to use them?</h6>
        </div>
    </div>
  );
}


export default FAQs;
