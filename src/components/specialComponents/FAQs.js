import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCirclePlus, faPersonCircleQuestion } from '@fortawesome/free-solid-svg-icons';

import './FAQs.css';


const QsBar = (props) =>{

    return(
        <div className='faq-icon'>
            <div className='faq-qs' onClick={props.handleIsExpanded}>
                <span><FontAwesomeIcon icon={faCirclePlus} /></span>
                <h6>{props.item.title}</h6>
            </div>
            {
                props.expanded 
                ?
                <div className='faq-text'>
                    <p>{props.item.text}</p>
                </div>
                :
                null
            }
        </div>
    );
}


const FAQs = (props) => {

    const [isExpanded, setIsExpanded] = useState(null);

    const handleIsExpanded = index =>{
        if(isExpanded === index){
            setIsExpanded(null);
        } else {
            setIsExpanded(index);
        }
    }


    const textDetail = props.faqDetail.map((item, index)=>{
        return(
            <QsBar 
                key={index} 
                item={item}  
                expanded={isExpanded === index}
                handleIsExpanded={()=>handleIsExpanded(index)}
            />
        );
    });


  return (
    <div className='faq'>
        <h2 style={{marginTop:"15px"}}><FontAwesomeIcon icon={faPersonCircleQuestion} /> FAQs <FontAwesomeIcon style={{fontSize:"20px"}} icon={faArrowRight} /></h2>
        {textDetail}
    </div>
  );
}


export default FAQs;
